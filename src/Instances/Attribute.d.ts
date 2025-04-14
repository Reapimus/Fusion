import { MergeStrings } from "../Types";

export type AttributeSymbol<K> = MergeStrings<"Attribute", K>;

/**
 * A special key for property tables, which allows users to apply custom
 * attributes to instances
 */
export default function Attribute<K extends string>(name: K): AttributeSymbol<K>;