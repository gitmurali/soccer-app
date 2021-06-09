interface StandingsData  {
	[key: string]:  number;
}

interface League {
	id: number;
	name: string;
}

interface LeagueData {
	leagues: Array<League>;
}

export const LEAGUE_DATA: LeagueData = Object.freeze({
	leagues: [
		{ id: 2002, name: "Bundesliga" },
		{ id: 2014, name: "Primera Division" },
		{ id: 2015, name: "Ligue 1" },
		{ id: 2019, name: "Serie A" },
		{ id: 2021, name: "Premier League" },
	],
});

export const standingsData: StandingsData = {
	total: 0,
	home: 1,
	away: 2,
};

export enum LeagueType {
	HOME = "home",
	AWAY = "away",
	TOTAL = "total",
}
