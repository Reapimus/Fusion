import Types from "../Types";

/**
 * Helper function for type checking purposes. Casts the input to a `Child`
 * type, while constraining the input to be an array of `Child` - this prevents
 * Luau from erroneously inferring a different array type for the input.
 */
export default function Child(x: Types.Child[]): Types.Child