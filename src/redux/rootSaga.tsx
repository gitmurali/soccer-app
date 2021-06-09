import { all } from "redux-saga/effects";

import soccerStandingSagas from "redux/soccerStandings/soccerStandings.saga";

/**
 * watchSagas - sagas watcher
 */
export default function* watchSagas() {
	yield all([...soccerStandingSagas]);
}
