import { MergeStrings } from "../Types";

export type AttributeChangeSymbol<K> = MergeStrings<"AttributeChange", K>;

/**
 * A special key for property tables, which allows users to connect to
 * an attribute change on an instance.
 */
export default function AttributeChange<K extends string>(name: K): AttributeChangeSymbol<K>;