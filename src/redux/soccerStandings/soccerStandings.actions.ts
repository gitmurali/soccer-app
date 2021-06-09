import { ActionType } from "model/model";

/**
 * fetchSoccerStandingsAction - Action to fetch standings data
 * @param {string} payload - Payload to get standings data
 */
export const fetchSoccerStandingsAction = (payload?: string) => {
	return {
		type: ActionType.FETCH_SOCCER_STANDINGS_REQUEST,
		payload,
	};
};
