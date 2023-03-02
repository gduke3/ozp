import { mediaQueries, MediaQueryKeyKind } from "@core/helpers/device.helper";

export function breakpoint(breakpoint: MediaQueryKeyKind) {
	const query = mediaQueries[breakpoint];
	return `@media ${query}`;
}

export const mobile = breakpoint("mobile");
export const tablet = breakpoint("tablet");
export const desktop = breakpoint("desktop");
