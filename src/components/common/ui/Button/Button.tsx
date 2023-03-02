import { memo } from "react";

import { OmitExtraProps } from "@core/types";

import * as S from "./Button.styled";

export interface Props extends OmitExtraProps<React.ComponentProps<"button">> {}

export const Button: React.FC<React.PropsWithChildren<Props>> = memo(({ children, ...rest }) => {
	return <S.Button {...rest}>{children}</S.Button>;
});
