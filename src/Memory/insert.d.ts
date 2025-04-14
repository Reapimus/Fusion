import Types from "../Types";

/**
 * Inserts clean up tasks passed in to the scope.
 */
export default function insert<Tasks extends any[]>(
    this: Types.Scope<unknown>,
    ...tasks: Tasks
): Tasks