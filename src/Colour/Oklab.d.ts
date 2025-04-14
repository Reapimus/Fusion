/**
 * Provides functions for converting Color3s into Oklab space, for more
 * perceptually uniform colour blending.
 * 
 * See: https://bottosson.github.io/posts/oklab/
 */
export declare namespace Oklab {
    /**
     * Converts a Color3 in linear RGB space to a Vector3 in Oklab space.
     */
    function fromLinear(rgb: Color3): Vector3;

    /**
     * Converts a Color3 in sRGB space to a Vector3 in Oklab space.
     */
    function fromSRGB(srgb: Color3): Vector3;

    /**
     * Converts a Vector3 in Oklab space to a Color3 in linear RGB space.
     * The Color3 will be clamped by default unless specified otherwise.
     */
    function toLinear(lab: Vector3, unclamped: boolean | undefined): Color3;

    /**
     * Converts a Vector3 in Oklab space to a Color3 in sRGB space.
     * The Color3 will be clamped by default unless specified otherwise.
     */
    function toSRGB(lab: Vector3, unclamped: boolean | undefined): Color3;
}