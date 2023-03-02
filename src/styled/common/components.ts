import styled from "styled-components";

export const Container = styled.div`
	width: 90%;
	margin: 0 auto;
	max-width: 1360px;
`;

export const SectionTitle = styled.p`
	color: white;
	font-weight: 700;
	font-size: 3.2rem;
	margin-bottom: 2.8rem;
	font-family: ${({ theme }) => theme.font.heading};
`;
