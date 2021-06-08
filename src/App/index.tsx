import * as React from "react";
import { WithWidth } from "@material-ui/core/withWidth";

import { RouteComponentProps, Router } from "react-router-dom";
import { history } from "../redux/configureStore";
import withRoot from "../hoc/withRoot";
import useStyles from "./styles";
import Routes from "../routes";

interface Props extends RouteComponentProps<void>, WithWidth {}

export const App = (props?: Props) => {
	const classes = useStyles();
	if (!props) {
		return null;
	}

	return (
		<Router history={history}>
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<Routes />
				</div>
			</div>
		</Router>
	);
};

export default withRoot(App);
