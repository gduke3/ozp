import { css } from "styled-components";

export const normalizeStyles = css`
	html {
		font-size: 10px;
	}

	body {
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-style: normal;
		font-variant-ligatures: normal;
		font-variant-caps: normal;
		font-variant-numeric: normal;
		font-variant-east-asian: normal;
		font-stretch: normal;
	}

	* {
		margin: 0;
		padding: 0;
		outline: none;
		color: inherit;
		background: initial;
		box-sizing: border-box;
		border: initial;
		font-family: inherit;
		font-weight: inherit;
		cursor: inherit;
		text-align: inherit;
		font-size: inherit;
		text-decoration: initial;
		word-wrap: break-word;
		text-transform: inherit;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}

	input,
	textarea,
	select {
		border: initial;
		padding: initial;
		background: initial;
	}

	button,
	a {
		cursor: pointer;
	}

	svg {
		width: 100%;
		height: 100%;

		&.icon {
			fill: inherit;
			stroke: inherit;
			stroke-width: inherit;

			g,
			path {
				stroke: inherit;
				fill: inherit;
				stroke-width: inherit;
			}
		}
	}
`;
