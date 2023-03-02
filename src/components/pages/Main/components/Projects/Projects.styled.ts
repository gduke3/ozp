import styled from "styled-components";

import * as C from "@styled/common/components";

export const Projects = styled(C.Container)``;

export const Title = styled(C.SectionTitle)``;

export const Project = styled.div`
	display: flex;
	align-items: center;
	padding: 3.4rem 4rem;
	border-radius: 1.4rem;
	justify-content: space-between;
	border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ProjectName = styled.p`
	font-size: 2rem;
	font-weight: 700;
	font-family: ${({ theme }) => theme.font.heading};
`;

export const ProjectDescription = styled.p`
	font-weight: 600;
	font-size: 1.4rem;
	margin-top: 0.4rem;
`;
