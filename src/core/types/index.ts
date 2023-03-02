import {
	FlattenSimpleInterpolation,
	FlattenInterpolation,
	ThemeProps,
	DefaultTheme,
} from "styled-components";

export type KeysMatching<T extends object, V> = {
	[K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export type IfEquals<T, U, Y = true, N = false> = (<G>() => G extends T ? 1 : 2) extends <
	G
>() => G extends U ? 1 : 2
	? Y
	: N;

export type OmitExtraProps<T extends object> = Omit<T, "children" | "ref">;

export type StyledVariants<K extends string> = {
	[key in K]?: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>;
};
