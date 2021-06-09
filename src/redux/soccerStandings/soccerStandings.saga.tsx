import { put, takeLatest, fork, call } from "redux-saga/effects";

import { fetchApi, MethodType } from "services/Api";
import { ActionType, Payload, Standings } from "model/model";

/**
 * getSoccerStandings is a generator function to make a api call and dispatch success/failure
 * @param {string} payload - payload
 * @returns ScoreStandingsData: Promise<SoccerStandingsReducerType|*>
 * */
export function* getSoccerStandings({ payload }: Payload): any {
	try {
		const response: Standings = yield call(fetchApi, {
			method: MethodType.GET,
			url: `competitions/${payload}/standings`,
			data: undefined,
		});
		const responsePayload = response.standings;
		yield put({
			type: ActionType.FETCH_SOCCER_STANDINGS_SUCCESS,
			payload: { season: response.season, standings: responsePayload },
		});
	} catch (error) {
		yield put({
			type: ActionType.FETCH_SOCCER_STANDINGS_ERROR,
			payload: error,
		});
	}
}

function* onSoccerStandingsWatcher() {
	yield takeLatest(
		ActionType.FETCH_SOCCER_STANDINGS_REQUEST,
		getSoccerStandings
	);
}

export default [fork(onSoccerStandingsWatcher)];
