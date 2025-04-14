import Types from "./Types";

/**
 * Abstraction layer between Fusion internals and external debuggers, allowing
 * for deep introspection using function hooks.
 * 
 * Unlike `External`, attaching a debugger is optional, and all debugger
 * functions are expected to be infallible and non-blocking.
 */
interface Module {
    /**
     * Swaps to a new debugger.
	 * Returns the old debugger, so it can be used again later.
     */
    setDebugger: (newProvider: Types.ExternalDebugger | undefined) => Types.ExternalDebugger | undefined,

    /**
     * Called at the earliest moment after a scope is created or removed from the
	 * scope pool, but not before the scope has finished being prepared by the
	 * library, so that debuggers can register its existence and track changes
	 * to the scope over time.
     */
    trackScope: (scope: Types.Scope<unknown>) => void,

    /**
     * Called at the final moment before a scope is poisoned or added to the scope
	 * pool, after all cleanup tasks have completed, so that debuggers can erase 
	 * the scope from internal trackers. Note that, due to scope pooling and user
	 * code, never assume that this correlates with garbage collection events.
     */
    untrackScope: (scope: Types.Scope<unknown>) => void
}

export = Module;