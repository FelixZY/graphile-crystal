import type { CrystalResultsList, CrystalValuesList } from "../interfaces";
import { ExecutablePlan } from "../plan";

/**
 * Returns a reversed copy of the list.
 */
export function reverseArray<TData = any>(list: readonly TData[]): TData[] {
  if (!Array.isArray(list)) {
    throw new Error(
      `Attempted to reverse an array, but what was passed wasn't an array`,
    );
  }
  const l = list.length;
  const newList = new Array(l);
  for (let i = 0; i < l; i++) {
    newList[i] = list[l - i - 1];
  }
  return newList;
}

/**
 * Reverses a list.
 */
export class ReversePlan<TData extends any> extends ExecutablePlan<TData[]> {
  constructor(plan: ExecutablePlan<TData[]>) {
    super();
    this.addDependency(plan);
  }

  execute(values: CrystalValuesList<[TData[]]>): CrystalResultsList<TData[]> {
    return values.map(([arr]) => (arr == null ? arr : reverseArray(arr)));
  }

  deduplicate(peers: ReversePlan<TData>[]): ReversePlan<TData> {
    return peers.length > 0 ? peers[0] : this;
  }
}

export function reverse<TData extends any>(
  plan: ExecutablePlan<TData[]>,
): ReversePlan<TData> {
  return new ReversePlan<TData>(plan);
}
