import * as React from "react";
import { Route } from "react-router";
import SoccerStandingsPage from "../pages/SoccerStandings/container";
import useStyles from "App/styles";

const Routes = () => {
	const classes = useStyles();
	return (
		<div className={classes.content}>
			<Route exact={true} path="/" component={SoccerStandingsPage} />
		</div>
	);
};

export default Routes;
