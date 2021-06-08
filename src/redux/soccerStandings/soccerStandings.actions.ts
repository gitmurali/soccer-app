import { ActionType } from "model/model";

export const fetchSoccerStandingsAction = (payload?: string) => {
	return {
		type: ActionType.FETCH_SOCCER_STANDINGS_REQUEST,
		payload,
	};
};
