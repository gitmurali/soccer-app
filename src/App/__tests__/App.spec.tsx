import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../hoc/withRoot";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { App } from "../";

const mockStore = configureMockStore();
const store = mockStore({
	soccer: {
		season: {
			startDate: "2020-09-12",
			endDate: "2021-05-23",
		},
		standings: {},
	},
});

describe("App Component", function () {
	it("should render App component with headings and standings table", () => {
		render(
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<App history={History} />
				</ThemeProvider>
			</Provider>
		);
		expect(screen.getByText("Soccer Standings")).toBeInTheDocument();
		expect(screen.getByText("Season start date:")).toBeInTheDocument();
		expect(screen.getByText("Season end date:")).toBeInTheDocument();
		expect(screen.getByTestId("StandingsTable")).toBeInTheDocument();
	});
});
