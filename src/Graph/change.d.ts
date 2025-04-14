import Types from "../Types";

/**
 * Prompts a graph object to re-evaluate its own value. If it meaningfully
 * changes, then dependents will have to re-evaluate their own values in the
 * future.
 * 
 * https://fluff.blog/2024/04/16/monotonic-painting.html
 */
export default function change(target: Types.GraphObject): void