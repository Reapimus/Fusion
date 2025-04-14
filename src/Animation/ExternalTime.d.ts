import Types from "../Types";

export declare interface ExternalTime extends Types.StateObject<number> {
    type: "State";
    kind: "ExternalTime";
    timeliness: "lazy";
}

/**
 * Outputs the current external time as a state object.
 */
export default function ExternalTime(this: Types.Scope<unknown>): ExternalTime