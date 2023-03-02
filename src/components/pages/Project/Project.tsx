import { memo, useEffect } from "react";
import { useParams, redirect } from "react-router";
import { Link } from "react-router-dom";

import { projects } from "@core/config/data.config";

import { Button } from "@components/common/ui/Button/Button";

import * as S from "./Project.styled";

export const Project: React.FC = memo(() => {
	const { id } = useParams();
	const project = projects.find((project) => project.id === id);

	useEffect(() => {
		if (!project) redirect("/");
	}, [project]);

	return (
		<S.Project>
			<S.Title>{project?.name}</S.Title>
			<S.Description>{project?.description}</S.Description>
			<Link to='/'>
				<Button>Назад</Button>
			</Link>
		</S.Project>
	);
});
