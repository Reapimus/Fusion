import Types from "../Types";

/**
 * Evaluates the graph object if necessary, so that it is up to date.
 * Returns true if it meaningfully changed.
 * 
 * https://fluff.blog/2024/04/16/monotonic-painting.html
 */
export default function evlaute(target: Types.GraphObject, forceComputation: boolean): boolean;