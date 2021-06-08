import React, { FC, useContext } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@material-ui/core";
import { SoccerStanding } from "../../model/model";
import { SoccerContext } from "../../contexts/useSoccerDataContext";
import { useStyles } from "../../pages/SoccerStandings/styles";

type Props = {
	tableData: Array<SoccerStanding>;
};

/**
 * Renders a <Standings /> table displays team(s) with most wins
 */
const Standings: FC = () => {
	const { tableData } = useContext<Props | any>(SoccerContext);
	const classes = useStyles();
	const sortedTableDataByWins: Array<SoccerStanding> = tableData
		.slice()
		.sort((a: SoccerStanding, b: SoccerStanding) => b.won - a.won);

	return (
		<Table data-testid="StandingsTable">
			<TableHead>
				<TableRow>
					<TableCell>Team</TableCell>
					<TableCell>Won</TableCell>
					<TableCell>Lost</TableCell>
					<TableCell>Draw</TableCell>
					<TableCell>Points</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{sortedTableDataByWins.map((soccerStanding) => {
					const { won, draw, team, points, position, lost }: SoccerStanding =
						soccerStanding;
					return (
						<TableRow key={position}>
							<TableCell className={classes.center}>
								{team?.crestUrl && (
									<img
										className={classes.img}
										src={team.crestUrl}
										alt={team?.name}
									/>
								)}
								{team?.name && (
									<span className={classes.team}>{team.name}</span>
								)}
							</TableCell>
							<TableCell>{won ?? ""}</TableCell>
							<TableCell> {lost ?? ""}</TableCell>
							<TableCell>{draw ?? ""}</TableCell>
							<TableCell>{points ?? ""}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};
export default Standings;
