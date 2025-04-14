/**
 * A variant of xpcall() designed for inline usage, letting you define fallback
 * values based on caught errors.
 */
export declare function Safe<Success, Fail>(
    callbacks: {
        try: () => Success,
        fallback: (err: unknown) => Fail
    }
): Success | Fail