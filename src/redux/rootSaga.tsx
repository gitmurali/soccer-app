import { all } from "redux-saga/effects";

import soccerStandingSagas from "redux/soccerStandings/soccerStandings.saga";

export default function* watchSagas() {
	yield all([...soccerStandingSagas]);
}
