import Types from "../../Types";
import ForTypes from "./ForTypes";

/**
 * Breaks down an input table into reactive sub-objects for each pair.
 */
export declare function Disassembly<S, KI, KO, VI, VO>(
    scope: S & Types.Scope<unknown>,
    inputTable: Types.UsedAs<Map<KI,VI>>,
    constructor: (
        arg0: Types.Scope<S>,
        initialKey: KI,
        initialValue: VI
    ) => ForTypes.SubObject<S, KI, KO, VI, VO>
): ForTypes.Disassembly<S, KI, KO, VI, VO>;