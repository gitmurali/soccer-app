import {
	Action,
	ActionType,
	SoccerStanding,
	SoccerStandingsReducerType,
} from "model/model";
import createReducer from "../createReducer";

const defaultState: SoccerStandingsReducerType = {
	season: {
		startDate: "",
		endDate: "",
	},
	standings: [
		{
			type: "",
			table: [],
		},
	],
	loading: false,
	error: undefined,
};

/**
 * soccerStandings - A reducer function to update store
 */
export const soccerStandings = createReducer<SoccerStandingsReducerType>(
	defaultState,
	{
		[ActionType.FETCH_SOCCER_STANDINGS_REQUEST]: (
			state: SoccerStandingsReducerType,
			action: Action<SoccerStanding[]>
		) => ({
			...state,
			loading: true,
		}),
		[ActionType.FETCH_SOCCER_STANDINGS_SUCCESS]: (
			state: SoccerStandingsReducerType,
			action: Action<any>
		) => ({
			...state,
			loading: false,
			standings: action.payload.standings,
			season: action.payload.season,
		}),
		[ActionType.FETCH_SOCCER_STANDINGS_ERROR]: (
			state: SoccerStandingsReducerType,
			action: Action<SoccerStanding[]>
		) => ({
			...state,
			loading: false,
			error: action.payload,
		}),
	}
);
