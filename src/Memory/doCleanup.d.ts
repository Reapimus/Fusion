import Types from "../Types";

/**
 * Cleans up the tasks passed in as the arguments.
 * A task can be any of the following:
 * 
 * - an Instance - will be destroyed
 * - an RBXScriptConnection - will be disconnected
 * - a function - will be run
 * - a table with a `Destroy` or `destroy` function - will be called
 * - an array - `cleanup` will be called on each item
 */
export default function doCleanup(task: Types.Task): void;