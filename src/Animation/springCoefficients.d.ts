/**
 * Returns a 2x2 matrix of coefficients for a given time, damping and angular
 * frequency (aka 'speed').
 * 
 * Specifically, this returns four coefficients - posPos, posVel, velPos, and
 * velVel - which can be multiplied with position and velocity like so:
 * 
 * local newPosition = oldPosition * posPos + oldVelocity * posVel
 * local newVelocity = oldPosition * velPos + oldVelocity * velVel
 * 
 * For speed = 1 and damping = 0, the result is a simple harmonic oscillator
 * with a period of tau.
 * 
 * Special thanks to AxisAngle for helping to improve numerical precision.
 */
export default function springCoefficients(
    time: number,
    damping: number,
    speed: number
): [number, number, number, number];