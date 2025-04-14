import Types from "../Types";

/**
 * State object for measuring time since an event using a reference timer.
 */
export declare interface Stopwatch extends Types.StateObject<number> {
    type: "State";
    kind: "Stopwatch";
    timeliness: "lazy";

    zero: () => void;
    pause: () => void;
    unpause: () => void;
}