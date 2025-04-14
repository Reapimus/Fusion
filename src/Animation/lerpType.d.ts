/**
 * Linearly interpolates the given animatable types by a ratio.
 * If the types are different or not animatable, then the first value will be
 * returned for ratios below 0.5, and the second value for 0.5 and above.
 */
export default function lerpType(from: unknown, to: unknown, ratio: number): unknown;