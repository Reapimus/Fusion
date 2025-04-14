import Types from "../Types";

/**
 * A specialised state object for following a goal state smoothly over time,
 * using a TweenInfo to shape the motion.
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/animation/types/tween/
 */
export declare interface Tween<T> extends Types.StateObject<T> {
    type: "State";
    kind: "Tween";
    timeliness: "eager";
}

/**
 * Constructs a new tween state object
 * 
 * https://elttob.uk/Fusion/0.3/api-reference/animation/types/tween/
 */
export default function Tween<T>(this: Types.Scope<unknown>, goal: Types.UsedAs<T>, tweenInfo: Types.UsedAs<TweenInfo> | undefined): Tween<T>;