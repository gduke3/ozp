import styled from "styled-components";

export const Button = styled.button`
	background: ${({ theme }) => theme.colors.primaryGradient};
	line-height: 4.4rem;
	font-size: 1.4rem;
	border-radius: 1rem;
	padding: 0 3.2rem;
	height: 4.4rem;
`;
