import React from "react";
import { SoccerContext } from "contexts/useSoccerDataContext";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Component:Header", () => {
	let props: any;

	const view = () =>
		render(
			<SoccerContext.Provider value={props}>
				<Header />
			</SoccerContext.Provider>
		);

	beforeEach(() => {
		props = {
			soccer: {
				season: {
					startDate: "2020-12-22",
					endDate: "2021-05-22",
				},
			},
			league: "2021",
			setLeague: jest.fn(),
			type: "",
			setType: jest.fn(),
		};
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("renders Header component with data provided.", () => {
		view();
		expect(screen.getByText("Season start date:")).toBeInTheDocument();
		expect(screen.getByText("Season end date:")).toBeInTheDocument();
	});

	it("should render premiere league", () => {
		view();
		expect(screen.getByText("Premier League")).toBeInTheDocument();
	});

	it("should render league type buttons", () => {
		view();
		expect(screen.queryByText("Home")).not.toBeDisabled();
		expect(screen.queryByText("Away")).not.toBeDisabled();
		expect(screen.queryByText("Total")).not.toBeDisabled();
	});

	describe("League type clicks", () => {
		it("should click on home and call setType function", () => {
			view();
			fireEvent.click(screen.getByText("Home"));
			expect(props.setType).toHaveBeenCalledWith("home");
		});
		it("should click on total and call setType function", () => {
			view();
			fireEvent.click(screen.getByText("Total"));
			expect(props.setType).toHaveBeenCalledWith("total");
		});
		it("should click on away and call setType function", () => {
			view();
			fireEvent.click(screen.getByText("Away"));
			expect(props.setType).toHaveBeenCalledWith("away");
		});
	});
});
