import Types from "../../Types";
import ForTypes from "./ForTypes";

/**
 * The generic implementation for all `For` objects.
 */
export interface For<KO, VO> extends Types.StateObject<Map<KO, VO>> {
    type: "State";
    kind: "For";
    timeliness: "lazy";
}

export default function For<S, KI, KO, VI, VO>(
    this: Types.Scope<S>,
    inputTable: Types.UsedAs<Map<KI, VI>>,
    constructor: (
        arg0: Types.Scope<S>,
        initialKey: KI,
        initialValue: VI
    ) => ForTypes.SubObject<S, KI, KO, VI, VO>
): For<KO, VO>;