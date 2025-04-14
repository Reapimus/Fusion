import Types from "../Types";

/**
 * Constructs and returns a new For state object which processes keys and
 * preserves values.
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/state/members/forkeys/
 */
export default function ForKeys<KI, KO, V, S>(
	this: Types.Scope<unknown>,
	inputTable: Types.UsedAs<Map<KI, V>>,
	processor: (arg0: Types.Use, arg1: S, key: KI) => KO
): Types.For<KO, V>;