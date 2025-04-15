import { Contextual as IContextual } from "./Utility/Contextual";
import { Computed as IComputed } from "./State/Computed";
import { For as IFor } from "./State/For";
import { Tween as ITween } from "./Animation/Tween";
import { Spring as ISpring } from "./Animation/Spring";
import { Children, ChildrenSymbol } from "./Instances/Children";
import { OnChangeSymbol } from "./Instances/OnChange";
import { OutSymbol } from "./Instances/Out";
import { OnEventSymbol } from "./Instances/OnEvent";
import { AttributeChangeSymbol } from "./Instances/AttributeChange";
import { AttributeOutSymbol } from "./Instances/AttributeOut";
import { AttributeSymbol } from "./Instances/Attribute";
import deriveScope from "./Memory/deriveScope";
import scoped from "./Memory/scoped";

export type Error = {
    type: "Error";
    raw: string;
    message: string;
    trace: string;
    context: string | undefined;
}

/**
 * Types that can be expressed as vectors of numbers, and so can be animated.
 */
export type Animatable =
	number |
	CFrame |
	Color3 |
	ColorSequenceKeypoint |
	DateTime |
	NumberRange |
	NumberSequenceKeypoint |
	PhysicalProperties |
	Ray |
	Rect |
	Region3 |
	Region3int16 |
	UDim |
	UDim2 |
	Vector2 |
	Vector2int16 |
	Vector3 |
	Vector3int16;

/**
 * A task which can be accepted for cleanup.
 */
export type Task =
    Instance |
    RBXScriptConnection |
    (() => void) |
    IDestroyable |
    Task[];

export interface IDestroyable {
    destroy(): void;
}

/**
 * A scope of tasks to clean up.
 */
export type Scope<Constructors = any> = Task[] & Constructors & Array<Task>;

/**
 * An object which uses a scope to dictate how long it lives.
 */
export type ScopedObject = {
	scope: Task[] | undefined,
	oldestTask: unknown
}

/**
 * Script-readable version information.
 */
export type Version = {
	major: number,
	minor: number,
	isRelease: boolean
}

/**
 * An object which stores a value scoped in time.
 */
export type Contextual<T> = IContextual<T>

type ContextualIsMethods = {
	during: <R, A extends any[]>(arg0: ContextualIsMethods, arg1: (...arg0: A) => R, ...arg2: A) => R
}

/**
 * A graph object which can have dependencies and dependencies.
 */
export type GraphObject = ScopedObject & {
	createdAt: number,
	dependencySet: Map<GraphObject, unknown>,
	dependentSet: Map<GraphObject, unknown>,
	lastChange: number | undefined,
	timeliness: "lazy" | "eager",
	validity: "valid" | "invalid" | "busy"
}

/**
 * An object which stores a piece of reactive state.
 */
export type StateObject<T> = GraphObject & {
	type: "State",
	kind: string
}

export type CanBeState<T> = StateObject<T> | T;

/**
 * Passing values of this type to `Use` returns `T`.
 */
export type UsedAs<T> = StateObject<T> | T

/**
 * Function signature for use callbacks.
 */
export type Use = <T>(target: UsedAs<T>) => T

/**
 * A state object whose value can be set at any time by the user.
 */
export type Value<T, S = T> = StateObject<T> & {
	kind: "State",
	timeliness: "lazy",
 	set: (newValue: S, force?: boolean | undefined) => S,
}
export type ValueConstructor = <T>(
	initialValue?: T
) => Value<T, any>

/**
 * A state object whose value is derived from other objects using a callback.
 */
export type Computed<T> = IComputed<T>;
export type ComputedConstructor = <T, S>(
	callback: (arg1: S) => T
) => Computed<T>

/**
 * A state object which maps over keys and/or values in another table.
 */
export type For<KO, VO> = IFor<KO, VO>;
export type ForPairsConstructor =  <KI, KO, VI, VO, S>(
	inputTable: UsedAs<Map<KI, VI>>,
	processor: (arg1: S, key: KI, value: VI) => [KO, VO]
) => For<KO, VO>
export type ForKeysConstructor =  <KI, KO, V, S>(
	inputTable: UsedAs<Map<KI, V>>,
	processor: (arg1: S, key: KI) => KO
) => For<KO, V>
export type ForValuesConstructor =  <K, VI, VO, S>(
	inputTable: UsedAs<Map<K, VI>>,
	processor: (arg1: S, value: VI) => VO
) => For<K, VO>

/**
 * An object which can listen for updates on another state object.
 */
export type Observer = GraphObject & {
	type: "Observer",
	timeliness: "eager",
	onChange: (callback: () => void) => (() => void),
	onBind: (callback: () => void) => (() => void)
}
export type ObserverConstructor = (
	watching: unknown
) => Observer

/**
 * A state object which follows another state object using tweens.
 */
export type Tween<T> = ITween<T>;
export type TweenConstructor = <T>(
	goalState: UsedAs<T>,
	tweenInfo: UsedAs<TweenInfo> | undefined
) => Tween<T>

/**
 * A state object which follows another state object using spring simulation.
 */
export type Spring<T> = ISpring<T>;
export type SpringConstructor = <T>(
	goalState: UsedAs<T>,
	speed: UsedAs<number> | undefined,
	damping: UsedAs<number> | undefined
) => Spring<T>

/**
 * Denotes children instances in an instance or component's property table.
 */
export type SpecialKey = {
	type: "SpecialKey",
	kind: string,
	stage: "self" | "descendants" | "ancestor" | "observer",
	apply: (
		value: unknown,
		applyTo: Instance
	) => void
}

export type MergeStrings<S extends string, K> = K extends string | number | bigint | boolean | null | undefined
	? `____Fusion${S}${K}`
	: never;

/**
 * A collection of instances that may be parented to another instance.
 */
export type Child = Instance | ChildStateObject | Map<unknown, Child>;
export interface ChildStateObject extends StateObject<Child> {}

/**
 * A collection of instances that may be parented to another instance.
 */
export type ChildrenValue =
	| Instance
	// StateObject needs to be written out to prevent circular reference error
	| {
			type: "State";
			kind: string;
			get(asDependency?: boolean): ChildrenValue;
	  }
	| For<any, any>
	| Array<ChildrenValue>
	| { [K in any]: ChildrenValue }
	| Map<any, ChildrenValue>
	| undefined;

export type AttributeValue =
	| string
	| boolean
	| number
	| UDim
	| UDim2
	| BrickColor
	| Color3
	| Vector2
	| Vector3
	| EnumItem
	| NumberSequence
	| ColorSequence
	| NumberRange
	| Rect
	| Font
	| CFrame;

/**
 * A table that defines an instance's properties, handlers and children.
 */
export type PropertyTable<T extends Instance> = Partial<
{
	[K in keyof WritableInstanceProperties<T>]: CanBeState<WritableInstanceProperties<T>[K]>;
} &
	{
		[K in InstancePropertyNames<T> as OnChangeSymbol<K>]: (newValue: T[K]) => void;
	} &
	{
		[K in InstancePropertyNames<T> as OutSymbol<K>]: Value<T[K]>;
	} &
	{
		[K in InstanceEventNames<T> as OnEventSymbol<K>]: T[K] extends RBXScriptSignal<infer C>
			? (...args: Parameters<C>) => void
			: never;
	} &
	Record<ChildrenSymbol, ChildrenValue> &
	Record<AttributeChangeSymbol<any>, (newValue: AttributeValue) => void> &
	Record<AttributeOutSymbol<any>, Value<unknown>> &
	Record<AttributeSymbol<any>, AttributeValue>
>;

export type NewConstructor<T extends keyof CreatableInstances> = (className: T) => (arg0: PropertyTable<Instances[T]>) => Instances[T]

export type HydrateConstructor<T extends Instance> = (
	target: T
) => (propertyTable: PropertyTable<T>) => Instance

export type DeriveScopeConstructor = typeof deriveScope;
export type ScopedConstructor = typeof scoped;

export type ContextualConstructor = <T>(defaultValue: T) => Contextual<T>

export type Safe = <Success, Fail>(
	callbacks: {
		try: () => Success,
		fallback: (err: unknown) => Fail
	}
) => Success | Fail

export type ExternalProvider = {
	policies: {
		allowWebLinks: boolean
	},

	logErrorNonFatal: (
		errorString: string
	) => void,
	logWarn: (
		errorString: string
	) => void,

	doTaskImmediate: (
		resume: () => void
	) => void,
	doTaskDeferred: (
		resume: () => void
	) => void,
	startScheduler: () => void,
	stopScheduler: () => void
}

export type ExternalDebugger = {
	startDebugging: () => void,
	stopDebugging: () => void,

	trackScope: (
		scope: Scope<unknown>
	) => void,
	untrackScope: (
		scope: Scope<unknown>
	) => void
}