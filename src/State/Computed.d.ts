import Types from "../Types";

/**
 * A specialised state object for tracking single values computed from a
 * user-defined computation.
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/state/types/computed/
 */
export declare interface Computed<T> extends Types.StateObject<T> {
    type: "State";
    kind: "Computed";
    timeliness: "lazy";
}

export default function Computed<T, S>(
    this: S & Types.Scope<unknown>,
    callback: (arg0: Types.Use, arg1: S) => T
): Computed<T>;