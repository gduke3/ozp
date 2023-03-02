import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "@styled/common/theme";
import { GlobalStyles } from "@styled";

import { App } from "./app";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);

reportWebVitals();
