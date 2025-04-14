import Types from "../Types";

/**
 * Procedures for checking lifetimes and printing helpful warnings about them.
 */
interface Module {
    formatters: {
        useFunction: (used: unknown) => [string, string];
        boundProperty: (instance: Instance, bound: unknown, property: string) => [string, string];
        boundAttribute: (instance: Instance, bound: unknown, attribute: string) => [string, string];
        propertyOutputsTo: (instance: Instance, bound: unknown, property: string) => [string, string];
        attributeOutputsTo: (instance: Instance, bound: unknown, attribute: string) => [string, string];
        refOutputsTo: (instance: Instance, bound: unknown) => [string, string];
        animationGoal: (goal: unknown) => [string, string];
        parameter: (used: unknown, parameterName: string | false) => [string, string];
        observer: (watched: unknown) => [string, string];
    };

    bOutlivesA: <A, B, Args extends any[]>(
        scopeA: Types.Scope<unknown>,
        a: A,
        scopeB: Types.Scope<unknown> | undefined,
        b: B,
        formatter: (a: A, b: B, ...args: Args) => [string, string],
        ...args: Args
    ) => void;
}