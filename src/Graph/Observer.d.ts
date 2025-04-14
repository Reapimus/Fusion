import Types from "../Types";

/**
 * A graph object that runs user code when it's updated by the reactive graph.
 * 
 * http://elttob.uk/Fusion/0.3/api-reference/state/types/observer/
 */
export declare interface Observer {
    type: "Observer";
    timeliness: "eager";

    onBind: (callback: () => void) => void;
    onChange: (callback: () => void) => void;
}

/**
 * Constructs a new Observer object.
 */
export default function Observer(this: Types.Scope<unknown>, watching: unknown): Observer;