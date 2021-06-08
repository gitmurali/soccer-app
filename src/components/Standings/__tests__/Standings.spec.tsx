import React from "react";
import { SoccerContext } from "contexts/useSoccerDataContext";
import Standings from "../Standings";
import { render, screen, fireEvent } from "@testing-library/react";
import { mockStandingsData } from "../__mockData__";

describe("Component:Standings", () => {
	let props: any;

	const view = () =>
		render(
			<SoccerContext.Provider value={props}>
				<Standings />
			</SoccerContext.Provider>
		);

	beforeEach(() => {
		props = {
			tableData: mockStandingsData,
		};
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("renders Standings table header", () => {
		view();
		expect(screen.getByText("Team")).toBeInTheDocument();
		expect(screen.getByText("Won")).toBeInTheDocument();
		expect(screen.getByText("Lost")).toBeInTheDocument();
		expect(screen.getByText("Draw")).toBeInTheDocument();
		expect(screen.getByText("Points")).toBeInTheDocument();
	});

	it("should render Standings table data", () => {
		view();
		screen.debug();
		expect(screen.getByText('Manchester City FC')).toBeInTheDocument();
		expect(screen.getByText('Manchester United FC')).toBeInTheDocument();
	});
});
