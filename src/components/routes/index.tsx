import { Routes as Switch, Route } from "react-router-dom";

import { Main } from "@components/pages/Main/Main";
import { Project } from "@components/pages/Project/Project";

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/project/:id' element={<Project />} />
			<Route path='*' element={<Main />} />
		</Switch>
	);
};
