import Types from "../Types";

/**
 * Derives a new scope that's destroyed exactly once, whether by the user or by
 * the scope that it's inside of.
 */
export default function innerScope<T>(existing: Types.Scope<T>, ...args: Map<unknown, unknown>[]): any;