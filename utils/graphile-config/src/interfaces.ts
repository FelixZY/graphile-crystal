export type AnyCallback = (...args: any[]) => any;

export type CallbackDescriptor<T extends AnyCallback> = {
  provides?: string[];
  before?: string[];
  after?: string[];
  callback: T;
};

export type PromiseOrDirect<T> = T | PromiseLike<T>;

export type CallbackOrDescriptor<T extends AnyCallback> =
  | T
  | CallbackDescriptor<T>;

export type UnwrapCallback<T extends CallbackOrDescriptor<AnyCallback>> =
  T extends CallbackOrDescriptor<infer U> ? U : never;

export type FunctionalityObject<T> = Record<
  keyof T,
  CallbackOrDescriptor<AnyCallback>
>;
