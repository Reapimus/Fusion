import Types from "../Types";

/**
 * Creates cleanup tables with access to constructors as methods.
 */
// export function scoped(): Types.Scope<{}>;
export function scoped<A>(this: A & {}): Types.Scope<A>;
export function scoped<A, B>(this: A & {}, arg1: B & {}): Types.Scope<A & B>;
export function scoped<A, B, C>(this: A & {}, arg1: B & {}, arg2: C & {}): Types.Scope<A & B & C>;
export function scoped<A, B, C, D>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}): Types.Scope<A & B & C & D>;
export function scoped<A, B, C, D, E>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}): Types.Scope<A & B & C & D & E>;
export function scoped<A, B, C, D, E, F>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}, arg5: F & {}): Types.Scope<A & B & C & D & E & F>;
export function scoped<A, B, C, D, E, F, G>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}, arg5: F & {}, arg6: G & {}): Types.Scope<A & B & C & D & E & F & G>;
export function scoped<A, B, C, D, E, F, G, H>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}, arg5: F & {}, arg6: G & {}, arg7: H & {}): Types.Scope<A & B & C & D & E & F & G & H>;
export function scoped<A, B, C, D, E, F, G, H, I>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}, arg5: F & {}, arg6: G & {}, arg7: H & {}, arg8: I & {}): Types.Scope<A & B & C & D & E & F & G & H & I>;
export function scoped<A, B, C, D, E, F, G, H, I, J>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}, arg5: F & {}, arg6: G & {}, arg7: H & {}, arg8: I & {}, arg9: J & {}): Types.Scope<A & B & C & D & E & F & G & H & I & J>;
export function scoped<A, B, C, D, E, F, G, H, I, J, K>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}, arg5: F & {}, arg6: G & {}, arg7: H & {}, arg8: I & {}, arg9: J & {}, arg10: K & {}): Types.Scope<A & B & C & D & E & F & G & H & I & J & K>;
export function scoped<A, B, C, D, E, F, G, H, I, J, K, L>(this: A & {}, arg1: B & {}, arg2: C & {}, arg3: D & {}, arg4: E & {}, arg5: F & {}, arg6: G & {}, arg7: H & {}, arg8: I & {}, arg9: J & {}, arg10: K & {}, arg11: L & {}): Types.Scope<A & B & C & D & E & F & G & H & I & J & K & L>;

export default scoped;