import Types from "../Types";

/**
 * Creates an empty scope with the same metatables as the original scope. Used
 * for preserving access to constructors when creating inner scopes.
 * 
 * This is the internal version of the function, which does not implement
 * external debugging hooks.
 */
export function deriveScopeImpl<S>(this: Types.Scope<S>): Types.Scope<S>;
export function deriveScopeImpl<S, A>(this: Types.Scope<S>, arg1: A & {}): Types.Scope<S & A>;
export function deriveScopeImpl<S, A, B>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}): Types.Scope<S & A & B>;
export function deriveScopeImpl<S, A, B, C>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}): Types.Scope<S & A & B & C>;
export function deriveScopeImpl<S, A, B, C, D>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}): Types.Scope<S & A & B & C & D>;
export function deriveScopeImpl<S, A, B, C, D, E>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}): Types.Scope<S & A & B & C & D & E>;
export function deriveScopeImpl<S, A, B, C, D, E, F>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}, arg6: F & {}): Types.Scope<S & A & B & C & D & E & F>;
export function deriveScopeImpl<S, A, B, C, D, E, F, G>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}, arg6: F & {}, arg7: G & {}): Types.Scope<S & A & B & C & D & E & F & G>;
export function deriveScopeImpl<S, A, B, C, D, E, F, G, H>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}, arg6: F & {}, arg7: G & {}, arg8: H & {}): Types.Scope<S & A & B & C & D & E & F & G & H>;
export function deriveScopeImpl<S, A, B, C, D, E, F, G, H, I>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}, arg6: F & {}, arg7: G & {}, arg8: H & {}, arg9: I & {}): Types.Scope<S & A & B & C & D & E & F & G & H & I>;
export function deriveScopeImpl<S, A, B, C, D, E, F, G, H, I, J>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}, arg6: F & {}, arg7: G & {}, arg8: H & {}, arg9: I & {}, arg10: J & {}): Types.Scope<S & A & B & C & D & E & F & G & H & I & J>;
export function deriveScopeImpl<S, A, B, C, D, E, F, G, H, I, J, K>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}, arg6: F & {}, arg7: G & {}, arg8: H & {}, arg9: I & {}, arg10: J & {}, arg11: K & {}): Types.Scope<S & A & B & C & D & E & F & G & H & I & J & K>;
export function deriveScopeImpl<S, A, B, C, D, E, F, G, H, I, J, K, L>(this: Types.Scope<S>, arg1: A & {}, arg2: B & {}, arg3: C & {}, arg4: D & {}, arg5: E & {}, arg6: F & {}, arg7: G & {}, arg8: H & {}, arg9: I & {}, arg10: J & {}, arg11: K & {}, arg12: L & {}): Types.Scope<S & A & B & C & D & E & F & G & H & I & J & K & L>;

export default deriveScopeImpl;