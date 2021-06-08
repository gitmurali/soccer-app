import React from "react";
import StandingsListItem from "../StandingsListItem";
import { render, screen } from "@testing-library/react";
import { mockStandingsData } from "../../Standings/__mockData__";

describe("Component:StandingsListItem", () => {
	let props: any;

	const view = () => render(<StandingsListItem {...props} />);

	beforeEach(() => {
		props = {
			soccerStanding: mockStandingsData[0],
		};
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("should render Standings list item", () => {
		view();
		expect(screen.getByText('Manchester City FC')).toBeInTheDocument();
		expect(screen.getByText('27')).toBeInTheDocument();
		expect(screen.getByText('5')).toBeInTheDocument();
		expect(screen.getByText('6')).toBeInTheDocument();
		expect(screen.getByText('86')).toBeInTheDocument();
	});

	it('should render empty field when there is no data provided in a negative scenario', () => {
		props.soccerStanding = {};
		view();
		expect(screen.queryByText('Manchester City FC')).not.toBeInTheDocument();
	});
});
