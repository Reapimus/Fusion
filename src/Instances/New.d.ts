import Types from "../Types";

/**
 * Constructs and returns a new instance, with options for setting properties,
 * event handlers and other attributes on the instance right away.
 */
export default function New<T extends keyof CreatableInstances>(this: Types.Scope<unknown>, className: T): (arg0: Types.PropertyTable<Instances[T]>) => Instances[T]