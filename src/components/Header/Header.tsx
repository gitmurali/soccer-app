import React, { FC, useContext } from "react";
import {
	Box,
	Button,
	ButtonGroup,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
} from "@material-ui/core";
import { LEAGUE_DATA, LeagueType } from "../../constants";
import { useStyles } from "../../pages/SoccerStandings/styles";
import { SoccerStanding, SoccerStandingsReducerType } from "../../model/model";
import {
	SoccerContext,
} from "contexts/useSoccerDataContext";

type Props = {
	soccer: SoccerStandingsReducerType;
	league: string;
	setLeague: (value: string) => void;
	type: string;
	setType: (value: string) => void;
	tableData?: Array<SoccerStanding>;
};

/**
 * Renders a <Header /> component
 */
const Header: FC = () => {
	const classes = useStyles();
	const {
		soccer: {
			season: { startDate, endDate },
		},
		league,
		setLeague,
		type,
		setType,
	} = useContext<Props | any>(SoccerContext);
	return (
		<Box mb={10} mt={10}>
			<Grid container spacing={2}>
				<Grid item sm={6}>
					<div className={classes.date}>
						Season start date: <strong>{startDate}</strong>
					</div>
					<div className={classes.date}>
						Season end date: <strong>{endDate}</strong>
					</div>
				</Grid>
				<Grid item sm={6}>
					<Grid container spacing={4}>
						<Grid item sm={6}>
							<FormControl fullWidth>
								<InputLabel id="select-league-label">Select League</InputLabel>
								<Select
									labelId="select-league"
									data-testid="select-league"
									id="select-league"
									defaultValue={league}
									value={league}
									onChange={(evt: React.ChangeEvent<any>) =>
										setLeague(evt.target.value)
									}
								>
									{LEAGUE_DATA.leagues.map((league) => {
										return (
											<MenuItem key={league.id} value={league.id}>
												{league.name}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
						</Grid>
						<Grid item sm={6}>
							<ButtonGroup
								color="primary"
								aria-label="outlined primary button group"
							>
								<Button
									variant="contained"
									disabled={type === LeagueType.TOTAL}
									onClick={() => setType(LeagueType.TOTAL)}
								>
									Total
								</Button>
								<Button
									variant="contained"
									disabled={type === LeagueType.HOME}
									onClick={() => setType(LeagueType.HOME)}
								>
									Home
								</Button>
								<Button
									variant="contained"
									disabled={type === LeagueType.AWAY}
									onClick={() => setType(LeagueType.AWAY)}
								>
									Away
								</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Header;
