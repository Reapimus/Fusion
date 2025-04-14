import Types from "../Types";

export declare interface Spring<T> extends Types.StateObject<T> {
    type: "State";
    kind: "Spring";
    timeliness: "eager";

    setPosition: (position: T) => void;
    setVelocity: (velocity: T) => void;
    addVelocity: (velocity: T) => void;
}

export default function Spring<T>(
    this: Types.Scope<unknown>,
    goalState: Types.UsedAs<T>,
    speed: Types.UsedAs<number> | undefined,
    damping: Types.UsedAs<number> | undefined
): Spring<T>