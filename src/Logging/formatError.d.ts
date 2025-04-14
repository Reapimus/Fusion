import Types from "../Types";

/**
 * Formats a Fusion-specific error message.
 */
export default function formatError(
    externalProvider: Types.ExternalProvider | undefined,
    messageID: string,
    errorOrTrace: Types.Error | string | undefined,
    ...args: Array<unknown>
): string;