import styled from "styled-components";

import * as C from "@styled/common/components";

export const Promo = styled.div`
	padding: 5rem 0;
	background: ${({ theme }) => theme.colors.backgroundDarkness};
`;

export const Container = styled(C.Container)``;

export const Title = styled(C.SectionTitle)``;

export const Descriptions = styled.div``;

export const Description = styled.div`
	font-weight: 600;
	line-height: 200%;
	font-size: 1.8rem;

	&:not(:nth-child(1)) {
		margin-top: 6rem;
	}
`;

export const Logos = styled.div`
	display: flex;
	margin-top: 2rem;
	align-items: center;
`;

export const Logo = styled.div`
	height: 2rem;

	&:not(:nth-child(1)) {
		margin-left: 4rem;
	}
`;

export const LogoImage = styled.img``;
