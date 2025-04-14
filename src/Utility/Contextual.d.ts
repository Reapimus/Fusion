import Types from "../Types";

/**
 * Time-based contextual values, to allow for transparently passing values down
 * the call stack.
 */
export declare interface Contextual<T> {
    type: "Contextual",
    /**
     * Returns the current value of this contextual.
     */
	now: (arg0: Contextual<T>) => T,
	/**
     * Temporarily assigns a value to this contextual.
     */
    is: (arg0: Contextual<T>, arg1: T) => Types.ContextualIsMethods
}

export declare function Contextual<T>(defaultValue: T): Contextual<T>;