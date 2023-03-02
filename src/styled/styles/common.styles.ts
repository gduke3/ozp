import { css } from "styled-components";

export const commonStyles = css`
	body {
		font-family: ${({ theme }) => theme.font.text};
		background: ${({ theme }) => theme.colors.background};
		font-size: 1.6rem;
		font-weight: 600;
		color: white;
	}

	.noselect {
		user-select: none;
	}

	.animated-row {
		overflow: hidden;

		span {
			white-space: pre;
			display: inline-block;
		}
	}

	.animated-row.words span,
	.animated-row.chars span span {
		will-change: transform, opacity;
	}
`;
