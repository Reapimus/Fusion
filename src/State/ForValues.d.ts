import Types from "../Types";

/**
 * Constructs and returns a new For state object which processes values and
 * preserves keys.
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/state/members/forvalues/
 */
export default function ForValues<K, VI, VO, S>(
    this: Types.Scope<unknown>,
    inputTable: Types.UsedAs<Map<K, VI>>,
    processor: (arg0: Types.Use, arg1: S, value: VI) => VO
): Types.For<K, VO>;