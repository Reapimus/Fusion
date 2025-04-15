import Types from "../Types";

/**
 * A state object which allows regular Luau code to control its value.
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/state/types/value/
 */
export declare interface Value<T, S = T> extends Types.StateObject<T> {
    kind: "State";
    timeliness: "lazy";
    set: (this: S, newValue: S, force?: boolean) => S;
}

export default function Value<T>(this: Types.Scope<unknown>, intitialValue?: T): Value<T, any>;