import Types from "./Types";

/**
 * Abstraction layer between Fusion internals and external environments,
 * allowing for flexible integration with schedulers and test mocks.
 */
interface Module {
    /**
     * Multiplier for running-time safety checks across the Fusion codebase. Used to
     * stricten tests on infinite loop detection during unit testing.
     */
    safetyTimerMultiplier: number,

    /**
     * Swaps to a new provider for external operations.
	 * Returns the old provider, so it can be used again later.
     */
    setExternalProvider: (newProvider: Types.ExternalProvider | undefined) => Types.ExternalProvider | undefined,

    /**
     * Sends an immediate task to the external provider. Throws if none is set.
     */
    doTaskImmediate: (resume: () => void) => void,

    /**
     * Sends a deferred task to the external provider. Throws if none is set.
     */
    doTaskDeferred: (resume: () => void) => void

    /**
     * Errors in the current thread and halts execution.
     */
    logError: (
        messageID: string,
        errObj: Types.Error | undefined,
        ...otherArgs: unknown[]
    ) => void,

    /**
     * Errors in a different thread to preserve the flow of execution.
     */
    logErrorNonFatal: (
        messageID: string,
        errObj: Types.Error | undefined,
        ...otherArgs: unknown[]
    ) => void;

    /**
     * Shows a warning message in the output.
     */
    logWarn: (messageID: string, ...otherArgs: unknown[]) => void,

    /**
     * Registers a callback to the update step of the external provider.
	 * Returns a function that can be used to disconnect later.

	 * Callbacks are given the current number of seconds since an arbitrary epoch.
    
	 * TODO: This epoch may change between providers. We could investigate ways
	 * of allowing providers to co-operate to keep the epoch the same, so that
	 * monotonicity can be better preserved.
     */
    bindToUpdateStep: (callback: (now: number) => void) => () => void,

    /**
     * Steps time-dependent systems with the current number of seconds since an
	 * arbitrary epoch. This should be called as early as possible in the external
	 * provider's update cycle.
     */
    performUpdateStep: (now: number) => void,

    /**
     * Returns the timestamp of the last update step.
     */
    lastUpdateStep: () => number
}

export = Module;