import { memo } from "react";

import * as S from "./Promo.styled";

export const Promo: React.FC = memo(() => {
	return (
		<S.Promo id='promo'>
			<S.Container>
				<S.Title>Оптимизатор процесса загрузки товаров в ТС</S.Title>
				<S.Descriptions>
					<S.Description>
						ОПЗ - это инновационный продукт, который позволит
						<br />
						оптимизировать процесс загрузки товаров в транспортное средство.
					</S.Description>
					<S.Description>
						Позволяет автоматизировать такие задачи, как:
						<br />- Создание плана размещения грузов внутри ТС
						<br />- Обеспечение загрузки товаров посредством
						<br />
						распределения задач упаковки дронами
					</S.Description>
					<S.Description>
						Наши клиенты:
						<S.Logos>
							<S.Logo>
								<S.LogoImage src='/ozon.png' />
							</S.Logo>
							<S.Logo>
								<S.LogoImage src='/wildberries.png' />
							</S.Logo>
							<S.Logo>
								<S.LogoImage src='/yandex-market.png' />
							</S.Logo>
						</S.Logos>
					</S.Description>
				</S.Descriptions>
			</S.Container>
		</S.Promo>
	);
});
