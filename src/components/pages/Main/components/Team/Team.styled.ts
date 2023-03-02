import styled from "styled-components";

import * as C from "@styled/common/components";

export const Team = styled(C.Container)`
	overflow: hidden;
`;

export const Title = styled(C.SectionTitle)``;

export const UserRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:not(:nth-child(1)) {
		margin-top: 4rem;
	}
`;

export const UserAvatar = styled.div`
	border-radius: 1.4rem;
	position: relative;
	height: 19rem;
	width: 17rem;
`;

export const UserAvatarLetters = styled.div`
	font-family: ${({ theme }) => theme.font.heading};
	line-height: 19rem;
	text-align: center;
	font-weight: 800;
	font-size: 4rem;
	cursor: default;
	color: white;
`;

export const UserBadge = styled.div`
	bottom: -1rem;
	position: absolute;
	white-space: nowrap;
	padding: 1rem 1.6rem;
	border-radius: 1.4rem;
	background: ${({ theme }) => theme.colors.background};
`;

export const UserName = styled.p`
	font-weight: 700;
	font-size: 2rem;
	font-family: ${({ theme }) => theme.font.heading};
`;

export const UserBIO = styled.p`
	opacity: 0.8;
	font-weight: 600;
	font-size: 1.4rem;
`;

export const UserRowLine = styled.div`
	opacity: 0.2;
	width: calc(100% - 19rem);
	border-bottom: 1px dashed white;
`;
