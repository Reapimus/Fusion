/**
 * Extended typeof, designed for identifying custom objects.
 * If given a table with a `type` string, returns that.
 * Otherwise, returns `typeof()` the argument.
 */
export declare function xtypeof(
    x: unknown
): string;