/**
 * Attempts to merge a variadic number of tables together.
 */
export default function merge(
    overwrite: boolean,
    into: Map<unknown, unknown>,
    ...tables: Map<unknown, unknown>[]
): Map<unknown, unknown>;