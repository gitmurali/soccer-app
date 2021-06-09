import React, { ReactElement } from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#727272",
			dark: "#363839",
		},
		secondary: {
			main: "#e41e26",
			dark: "#a90000",
		},
	},
});

const withRoot = (Component: any) => {
	return (props: object): ReactElement => {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<Component {...props} />
			</ThemeProvider>
		);
	};
};

export default withRoot;
