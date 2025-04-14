import Types from "../Types";

/**
 * Returns the input *only* if it is a state object.
 */
export default function castToState<T>(
    target: Types.UsedAs<T>
): Types.StateObject<T> | undefined;