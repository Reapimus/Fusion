import Types from "../Types";

/**
 * An xpcall() error handler to collect and parse useful information about
 * errors, such as clean messages and stack traces.
 */
export default function parseError(err: string): Types.Error;