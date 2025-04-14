/**
 * Returns true if the given value is not automatically memory managed, and
 * requires manual cleanup.
 */
export default function needsDestruction(x: unknown): boolean;