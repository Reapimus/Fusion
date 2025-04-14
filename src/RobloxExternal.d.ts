interface Module {
    policies: {
        allowWebLinks: boolean
    },

    /**
     * Sends an immediate task to the external provider. Throws if none is set.
     */
    doTaskImmediate: (resume: () => void) => void,
    /**
     * Sends a deferred task to the external provider. Throws if none is set.
     */
    doTaskDeferred: (resume: () => void) => void,

    /**
     * Errors in a different thread to preserve the flow of execution.
     */
    logErrorNonFatal: (errorString: string) => void,
    /**
     * Shows a warning message in the output.
     */
    logWarn: typeof warn,

    /**
     * Binds Fusion's update step to RunService step events.
     */
    startScheduler: () => void,
    /**
     * Unbinds Fusion's update step from RunService step events.
     */
    stopScheduler: () => void
}

export = Module;
