/**
 * Provides transformation functions for converting linear RGB values
 * into sRGB values.
 * 
 * RGB color channel transformations are outlined here:
 * https://bottosson.github.io/posts/colorwrong/#what-can-we-do%3F
 */
export declare namespace sRGB {
    /**
     * Uses a transformation to convert linear RGB into sRGB.
     */
    function fromLinear(rgb: Color3): Color3;

    /**
     * Converts an sRGB into linear RGB using a
     * (The inverse of sRGB.fromLinear).
     */
    function toLinear(srgb: Color3): Color3;
}