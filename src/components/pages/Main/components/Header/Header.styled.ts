import styled from "styled-components";

export const Header = styled.header`
	height: 8rem;
`;

export const HeaderContent = styled.div`
	top: 0;
	left: 0;
	z-index: 99;
	width: 100%;
	height: 8rem;
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	background: ${({ theme }) => theme.colors.backgroundDarkness};
`;

export const Section = styled.button`
	font-weight: 600;
	font-size: 1.6rem;
	margin: 0 3rem;
`;
