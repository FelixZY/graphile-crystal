import type { NodePostgresPgClient, PgAdaptorSettings } from "./adaptors/pg.js";
import type { PgClient, WithPgClient } from "./executor.js";
import type { MakePgServiceOptions } from "./interfaces.js";

type PromiseOrDirect<T> = T | PromiseLike<T>;

export interface PgAdaptor<
  TSettings extends PgAdaptorSettings = PgAdaptorSettings,
  TMakePgServiceOptions extends MakePgServiceOptions = MakePgServiceOptions,
  TPgClient extends NodePostgresPgClient = NodePostgresPgClient,
> {
  /**
   * @internal
   * USED TO EXPOSE THE `TSettings` TYPE ONLY
   */
  typeOptionalAdaptorSettings?: TSettings;
  /**
   * @internal
   * USED TO EXPOSE THE `TPgClient` TYPE ONLY
   */
  typeOptionalPgClient?: TPgClient;

  createWithPgClient: (
    adaptorSettings?: TSettings,
    variant?: "SUPERUSER" | string | null,
  ) => PromiseOrDirect<WithPgClient<TPgClient>>;
  makePgService: (
    options: TMakePgServiceOptions,
  ) => GraphileConfig.PgServiceConfiguration<this>;
}

/**
 * Is "thenable".
 */
export function isPromiseLike<T>(
  t: T | Promise<T> | PromiseLike<T>,
): t is PromiseLike<T> {
  return t != null && typeof (t as any).then === "function";
}

const isTest = process.env.NODE_ENV === "test";

interface PgClientBySourceCacheValue<TPgClient extends PgClient = PgClient> {
  withPgClient: WithPgClient<TPgClient>;
  retainers: number;
}

const withPgClientDetailsByConfigCache = new Map<
  GraphileConfig.PgServiceConfiguration<any>,
  PromiseOrDirect<PgClientBySourceCacheValue>
>();

/**
 * Get or build the 'withPgClient' callback function for a given database
 * config, caching it to make future lookups faster.
 */
export function getWithPgClientFromPgService<
  TAdaptor extends PgAdaptor = PgAdaptor,
>(
  config: GraphileConfig.PgServiceConfiguration<TAdaptor>,
): PromiseOrDirect<
  WithPgClient<Exclude<PgAdaptor["typeOptionalPgClient"], undefined>>
> {
  type TPgClient = Exclude<PgAdaptor["typeOptionalPgClient"], undefined>;
  const existing = withPgClientDetailsByConfigCache.get(config);
  if (existing) {
    if (isPromiseLike(existing)) {
      return existing.then((v) => {
        v.retainers++;
        return v.withPgClient as WithPgClient<TPgClient>;
      });
    } else {
      existing.retainers++;
      return existing.withPgClient as WithPgClient<TPgClient>;
    }
  } else {
    const promise = (async () => {
      const factory = config.adaptor?.createWithPgClient;
      if (typeof factory !== "function") {
        throw new Error(
          `'${config.adaptor}' does not look like a withPgClient adaptor - please ensure it exports a method called 'createWithPgClient'`,
        );
      }

      const originalWithPgClient = await factory(config.adaptorSettings);
      const withPgClient = ((...args) =>
        originalWithPgClient.apply(null, args)) as WithPgClient;
      const cachedValue: PgClientBySourceCacheValue = {
        withPgClient,
        retainers: 1,
      };
      let released = false;
      withPgClient.release = () => {
        cachedValue.retainers--;

        // To allow for other promises to resolve and add/remove from the retaininers, check after a tick
        setTimeout(
          () => {
            if (cachedValue.retainers === 0 && !released) {
              released = true;
              withPgClientDetailsByConfigCache.delete(config);
              return originalWithPgClient.release?.();
            }
            // TODO: this used to be zero, but that seems really inefficient...
            // Figure out why I did that?
            // }, 0);
          },
          isTest ? 500 : 5000,
        );
      };
      withPgClientDetailsByConfigCache.set(config, cachedValue);
      return cachedValue;
    })();
    if (!withPgClientDetailsByConfigCache.has(config)) {
      withPgClientDetailsByConfigCache.set(config, promise);
    }
    promise.catch(() => {
      withPgClientDetailsByConfigCache.delete(config);
    });
    return promise.then((v) => v.withPgClient as WithPgClient<TPgClient>);
  }
}

export async function withPgClientFromPgService<
  T,
  TAdaptor extends PgAdaptor = PgAdaptor,
>(
  config: GraphileConfig.PgServiceConfiguration<TAdaptor>,
  pgSettings: { [key: string]: string } | null,
  callback: (client: PgClient) => T | Promise<T>,
): Promise<T> {
  const withPgClientFromPgService = getWithPgClientFromPgService(config);
  const withPgClient = isPromiseLike(withPgClientFromPgService)
    ? await withPgClientFromPgService
    : withPgClientFromPgService;
  try {
    return await withPgClient(pgSettings, callback);
  } finally {
    withPgClient.release!();
  }
}

// We don't cache superuser withPgClients
export async function withSuperuserPgClientFromPgService<
  T,
  TAdaptor extends PgAdaptor = PgAdaptor,
>(
  config: GraphileConfig.PgServiceConfiguration<TAdaptor>,
  pgSettings: { [key: string]: string } | null,
  callback: (client: PgClient) => T | Promise<T>,
): Promise<T> {
  const withPgClient = await config.adaptor.createWithPgClient(
    config.adaptorSettings,
    "SUPERUSER",
  );
  try {
    return await withPgClient(pgSettings, callback);
  } finally {
    withPgClient.release?.();
  }
}
