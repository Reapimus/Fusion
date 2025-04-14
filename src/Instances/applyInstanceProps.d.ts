import Types from "../Types";

/**
 * Applies a table of properties to an instance, including binding to any
 * given state objects and applying any special keys.
 * 
 * No strong reference is kept by default - special keys should take care not
 * to accidentally hold strong references to instances forever.
 * 
 * If a key is used twice, an error will be thrown. This is done to avoid
 * double assignments or double bindings. However, some special keys may want
 * to enable such assignments - in which case unique keys should be used for
 * each occurrence.
 */
export default function applyInstanceProps<T extends Instance>(props: Types.PropertyTable<T>, applyTo: T): void;