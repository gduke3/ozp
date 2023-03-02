export const mediaQueries = {
	mobile: "(max-width: 927px)",
	tablet:
		"(max-width: 1280px) and (min-resolution: 169dpi), (max-width: 1024px), (max-device-width: 1024px)",
	desktop: "(min-device-width: 1200px)",
};

export type MediaQueries = typeof mediaQueries;
export type MediaQueryKeyKind = keyof MediaQueries;
