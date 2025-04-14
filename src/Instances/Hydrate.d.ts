import Types from "../Types";

/**
 * Processes and returns an existing instance, with options for setting
 * properties, event handlers and other attributes on the instance.
 */
export default function Hydrate<T extends Instance>(this: Types.Scope<unknown>, target: T): (arg0: Types.PropertyTable<T>) => T;