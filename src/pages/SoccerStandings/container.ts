import { connect } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import SoccerStandingsPage from "./SoccerStandingsPage";
import { fetchSoccerStandingsAction } from "../../redux/soccerStandings/soccerStandings.actions";

const mapStateToProps = (state: RootState) => ({
	soccer: state?.soccer,
});

const mapDispatchToProps = (dispatch: any) => ({
	fetchSoccerStandings: (id: string) => {
		dispatch(fetchSoccerStandingsAction(id));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SoccerStandingsPage);
