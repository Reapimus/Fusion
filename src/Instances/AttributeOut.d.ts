import { MergeStrings } from "../Types";

export type AttributeOutSymbol<K> = MergeStrings<"AttributeOut", K>;

/**
 * A special key for property tables, which allows users to save instance attributes
 * into state objects
 */
export default function AttributeOut<K extends string>(name: K): AttributeOutSymbol<K>;