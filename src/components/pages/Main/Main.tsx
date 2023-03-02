import { Statuses } from "./components/Statuses/Statuses";
import { Projects } from "./components/Projects/Projects";
import { Header } from "./components/Header/Header";
import { Promo } from "./components/Promo/Promo";
import { Team } from "./components/Team/Team";

import * as S from "./Main.styled";

export const Main = () => {
	return (
		<>
			<Header />
			<S.Section>
				<Statuses />
			</S.Section>
			<S.Section>
				<Projects />
			</S.Section>
			<S.Section>
				<Team />
			</S.Section>
			<S.Section>
				<Promo />
			</S.Section>
		</>
	);
};
