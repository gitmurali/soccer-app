import { History } from "history";
import { combineReducers } from "redux";
import { routerReducer, RouterState } from "react-router-redux";

import { soccerStandings } from "redux/soccerStandings/soccerStandings.reducer";
import { SoccerStandingsReducerType } from "../model/model";

export interface RootState {
	soccer: SoccerStandingsReducerType;
	routerReducer: RouterState;
}

export default (history: History) =>
	combineReducers({
		soccer: soccerStandings,
		routerReducer,
	});
