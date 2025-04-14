import Types from "../Types";

/**
 * Extracts a value of type T from its input.
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/state/members/peek/
 */
export declare function peek<T>(target: Types.UsedAs<T>): T;