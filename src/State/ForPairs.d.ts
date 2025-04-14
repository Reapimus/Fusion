import Types from "../Types";

/**
 * Constructs and returns a new For state object which processes keys and
 * values in pairs.
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/state/members/forpairs/
 */
export default function ForPairs<KI, KO, VI, VO, S>(
	this: Types.Scope<unknown>,
	inputTable: Types.UsedAs<Map<KI, VI>>,
	processor: (arg0: Types.Use, arg1: S, key: KI, value: VI) => [KO, VO]
): Types.For<KO, VO>