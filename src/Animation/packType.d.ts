import Types from "../Types";

/**
 * Packs an array of numbers into a given animatable data type.
 * If the type is not animatable, nil will be returned.
 */
export default function packType(numbers: number[], typeString: string): Types.Animatable | undefined;