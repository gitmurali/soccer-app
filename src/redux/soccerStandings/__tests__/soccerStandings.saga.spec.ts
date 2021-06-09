import { runSaga } from "redux-saga";
import * as api from "../../../services/Api";
import { fetchApi } from "../../../services/Api";
import { getSoccerStandings } from "../soccerStandings.saga";
import { mockData } from "../__mockData__";

describe("saga:SoccerStandings", () => {
	describe("sagas:getSoccerStandings", () => {
		it("should fetch data from API and dispatch success", async () => {
			const dispatched: any = [];
			const fetchApiSpy = jest
				.spyOn(api, "fetchApi")
				.mockImplementation((): any => mockData);
			// let the saga run and see what it collects in dispatched
			await runSaga(
				{
					dispatch: (action) => dispatched.push(action),
				},
				getSoccerStandings,
				{ type: "FETCH_SOCCER_STANDINGS_REQUEST", payload: "2021" }
			);
			await Promise.resolve(dispatched);
			expect(fetchApiSpy).toBeCalledWith({
				data: undefined,
				method: "GET",
				url: "competitions/2021/standings",
			});
			expect(dispatched).toStrictEqual([
				{
					type: "FETCH_SOCCER_STANDINGS_SUCCESS",
					payload: {
						season: { endDate: "", startDate: "" },
						standings: [{ table: [], type: "" }],
					},
				},
			]);
		});
		it("should throw api error", async () => {
			const dispatched: any = [];
			const fetchApiSpy = jest
				.spyOn(api, "fetchApi")
				.mockImplementation((): any => Promise.reject(new Error("error")));
			await runSaga(
				{
					dispatch: (action) => dispatched.push(action),
				},
				getSoccerStandings,
				{ type: "FETCH_SOCCER_STANDINGS_REQUEST", payload: "2021" }
			);
			await Promise.resolve(dispatched);
			expect(fetchApiSpy).toBeCalled();
			expect(dispatched).toStrictEqual([
				{
					type: "FETCH_SOCCER_STANDINGS_ERROR",
					payload: new Error("error"),
				},
			]);
		});
	});
});
