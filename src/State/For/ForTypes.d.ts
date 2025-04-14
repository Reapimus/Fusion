import Types from "../../Types";

export interface SubObject<S, KI, KO, VI, VO> {
	maybeScope: Types.Scope<S> | undefined,
	inputKey: KI,
	inputValue: VI,
	roamKeys: boolean,
	roamValues: boolean,
	invalidateInputKey: () => void,
	invalidateInputValue: () => void,
	useOutputPair: (arg0: Types.Use) => [arg0: KO | undefined, arg1: VO | undefined]
}

export interface Disassembly<S, KI, KO, VI, VO> extends Types.GraphObject {
    populate: (arg0: Types.Use, output: Map<KO, VO>) => void
}