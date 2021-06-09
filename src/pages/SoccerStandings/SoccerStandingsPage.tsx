import React, { FC, useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { SoccerStanding, SoccerStandingsReducerType } from "../../model/model";
import { LeagueType, standingsData } from "../../constants";
import Header from "../../components/Header";
import Standings from "../../components/Standings";
import PremiereLeagueIcon from "../../resources/english_premiere_league.png";
import { SoccerContext } from "contexts/useSoccerDataContext";

type Props = {
	label: string;
	soccer: SoccerStandingsReducerType;
	fetchSoccerStandings: (id: string) => void;
};

/**
 * Renders a <SoccerStandingsPage /> page
 * @param  soccer - get the soccer data
 * @param  fetchSoccerStandings - fetch soccer standings
 */
const SoccerStandingsPage: FC<Props> = ({
	soccer,
	fetchSoccerStandings,
}: Props) => {
	const [tableData, setTableData] = useState<Array<SoccerStanding>>([]);
	const [type, setType] = useState<string>(LeagueType.TOTAL);
	const [league, setLeague] = useState<string>("2021");

	useEffect(() => {
		if (soccer?.standings?.[standingsData[type]]) {
			setTableData(soccer.standings[standingsData[type]]?.table);
		}
	}, [soccer, type]);

	useEffect(() => {
		fetchSoccerStandings(league);
	}, [league]);

	return (
		<main data-testid='SoccerStandingsPage'>
			<Grid container spacing={3} alignItems="center" justify="center">
				<Grid item>
					<img src={PremiereLeagueIcon} alt='Premiere league'/>
				</Grid>
				<Grid item>
					<Typography
						variant="h2"
						component="h2"
						gutterBottom
						align="center"
						data-testid="SoccerStandings"
					>
						Soccer Standings
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={3} justify="center">
				<Grid item sm={10}>
					<SoccerContext.Provider
						value={{
							soccer,
							league,
							setLeague,
							type,
							setType,
							tableData,
						}}
					>
						<Header />
						<Standings />
					</SoccerContext.Provider>
				</Grid>
			</Grid>
		</main>
	);
};
export default SoccerStandingsPage;
