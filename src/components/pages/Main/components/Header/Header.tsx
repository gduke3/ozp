import { memo } from "react";

import { scrollTo } from "@core/helpers/dom.helper";

import * as S from "./Header.styled";

export const Header: React.FC = memo(() => {
	return (
		<S.Header>
			<S.HeaderContent>
				<S.Section onClick={() => scrollTo("#statuses")}>Статус продукта</S.Section>
				<S.Section onClick={() => scrollTo("#projects")}>Проекты</S.Section>
				<S.Section onClick={() => scrollTo("#team")}>Команда</S.Section>
				<S.Section onClick={() => scrollTo("#promo")}>О продукте</S.Section>
			</S.HeaderContent>
		</S.Header>
	);
});
