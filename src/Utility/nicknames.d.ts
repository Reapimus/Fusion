/**
 * Stores nicknames for values that don't support metatables, so that `nameOf`
 * can return values for them.
 */
export default interface Nicknames extends Map<unknown, string> {}