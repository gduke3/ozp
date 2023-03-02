import { createGlobalStyle } from "styled-components";

import { commonStyles } from "./styles/common.styles";
import { normalizeStyles } from "./styles/normalize.styles";

export const GlobalStyles = createGlobalStyle`
   ${commonStyles}
   ${normalizeStyles}
`;
