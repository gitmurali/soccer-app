import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
	center: {
		display: "flex",
		alignItems: "center",
	},
	img: {
		width: 100,
		height: 100,
	},
	team: {
		marginLeft: 20,
		fontWeight: 700,
	},
	date: {
		marginBottom: 5,
	},
}));
