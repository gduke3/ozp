import { memo } from "react";

import * as S from "./Statuses.styled";

export const Statuses: React.FC = memo(() => {
	return (
		<S.Statuses id='statuses'>
			<S.StatusTree>
				<S.Status>
					<S.StatusProgressLine />
					<S.StatusTitle>Анализ и разработка требований</S.StatusTitle>
					<S.StatusDescription>
						Анализ требований — часть процесса разработки программного обеспечения, включающая в себя сбор
						требований к программному обеспечению (ПО), их систематизацию, выявление взаимосвязей, а также
						документирование
					</S.StatusDescription>
				</S.Status>
				<S.Status>
					<S.StatusProgressLine />
					<S.StatusTitle>Проектирование системы</S.StatusTitle>
					<S.StatusDescription>
						Под проектированием системы подразумевается процесс определения архитектуры, компонентов,
						интерфейсов и других характеристик системы или её части
					</S.StatusDescription>
				</S.Status>
				<S.Status $inactive>
					<S.StatusTitle $inactive>Реализация</S.StatusTitle>
					<S.StatusDescription>
						На данном этапе непосредственно происходит реализация продукта
					</S.StatusDescription>
				</S.Status>
			</S.StatusTree>
			<S.Banner>
				<S.BannerImage src='/banner.png' />
			</S.Banner>
		</S.Statuses>
	);
});
