import { memo } from "react";
import { Link } from "react-router-dom";

import { Button } from "@components/common/ui/Button/Button";

import { projects } from "@core/config/data.config";

import * as S from "./Projects.styled";

export const Projects: React.FC = memo(() => {
	return (
		<S.Projects id='projects'>
			<S.Title>Проекты</S.Title>
			<div>
				{projects.map((project, index) => (
					<S.Project key={index}>
						<div>
							<S.ProjectName>{project.name}</S.ProjectName>
							<S.ProjectDescription>{project.shortDescription}</S.ProjectDescription>
						</div>
						<Link to={`/project/${project.id}`}>
							<Button>Подробнее</Button>
						</Link>
					</S.Project>
				))}
			</div>
		</S.Projects>
	);
});
