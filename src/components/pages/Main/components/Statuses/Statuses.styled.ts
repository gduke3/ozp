import styled from "styled-components";

import * as C from "@styled/common/components";

export const Statuses = styled(C.Container)`
	padding: 6rem 0;
	position: relative;
`;

const STATUS_LEFT_OFFSET = "6rem";
const STATUS_DOT_SIZE = "1.2rem";
const BANNER_OFFSET = "6rem";
const BANNER_SIZE = "40rem";

export const StatusTree = styled.div`
	width: calc(100% - (${BANNER_SIZE} + ${BANNER_OFFSET}));
`;

export const Status = styled.div<{ $inactive?: boolean }>`
	position: relative;
	color: ${({ $inactive }) => $inactive && "rgba(255, 255, 255, .4)"};

	&:not(:nth-last-child(1)) {
		padding-bottom: 2.6rem;
	}
`;

export const StatusTitle = styled.p<{ $inactive?: boolean }>`
	font-weight: 700;
	font-size: 2.4rem;
	position: relative;
	padding-left: ${STATUS_LEFT_OFFSET};
	font-family: ${({ theme }) => theme.font.heading};

	&:before {
		content: "";
		left: 0;
		width: ${STATUS_DOT_SIZE};
		height: ${STATUS_DOT_SIZE};
		border-radius: 50%;
		position: absolute;
		top: calc(50% - ${STATUS_DOT_SIZE} / 2);
		background: ${({ theme, $inactive }) =>
			!$inactive ? theme.colors.primary : theme.colors.background};
		border: ${({ theme, $inactive }) => $inactive && `2px solid ${theme.colors.primary}`};
		box-sizing: border-box;
	}
`;

export const StatusProgressLine = styled.div`
	left: 0;
	height: 100%;
	top: ${STATUS_DOT_SIZE};
	width: ${STATUS_DOT_SIZE};
	position: absolute;

	&:after {
		content: "";
		top: 0;
		width: 1px;
		height: 100%;
		position: absolute;
		left: calc(50% - 0.5px);
		background: ${({ theme }) => theme.colors.primary};
	}
`;

export const StatusDescription = styled.p`
	font-weight: 600;
	margin-top: 1rem;
	line-height: 180%;
	font-size: 1.4rem;
	padding-left: ${STATUS_LEFT_OFFSET};
`;

export const Banner = styled.div`
	top: calc(50% - ${BANNER_SIZE} / 2);
	right: 0;
	width: ${BANNER_SIZE};
	height: ${BANNER_SIZE};
	overflow: hidden;
	position: absolute;
	border-radius: 1.4rem;
`;

export const BannerImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
