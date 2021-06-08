import React from "react";
import SoccerStandingsPage from "../SoccerStandingsPage";
import { render, screen, fireEvent } from "@testing-library/react";
import {
	mockAwayStandingsData,
	mockHomeStandingsData,
	mockStandingsData,
} from "../../../components/Standings/__mockData__";

describe("Component:SoccerStandingsPage", () => {
	let props: any;

	const view = () => render(<SoccerStandingsPage {...props} />);

	beforeEach(() => {
		props = {
			soccer: {
				season: {
					startDate: "2020-12-22",
					endDate: "2021-05-22",
				},
				standings: [
					{
						type: "TOTAL",
						table: mockStandingsData,
					},
					{
						type: "HOME",
						table: mockHomeStandingsData,
					},
					{
						type: "AWAY",
						table: mockAwayStandingsData,
					},
				],
			},
			fetchSoccerStandings: jest.fn(),
		};
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("renders SoccerStandingsPage page with data provided.", () => {
		view();
		expect(screen.getByTestId("SoccerStandingsPage")).toBeInTheDocument();
	});

	it("should display heading", () => {
		view();
		expect(screen.getByText("Soccer Standings")).toBeInTheDocument();
	});

	it("should call fetchSoccerStandings on load", () => {
		view();
		expect(props.fetchSoccerStandings).toBeCalledWith("2021");
	});

	it("should click on home button", async () => {
		view();
		fireEvent.click(screen.getByText("Home"));
		expect(screen.getByText("AS Monaco FC")).toBeInTheDocument();
	});

	it("should click on away button", async () => {
		view();
		fireEvent.click(screen.getByText("Away"));
		expect(screen.getByText("Manchester City FC")).toBeInTheDocument();
	});
});
