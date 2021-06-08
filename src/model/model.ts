export interface Payload {
	type: string;
	payload?: string;
}

export interface Team {
	id: number;
	name: string;
	crestUrl: string;
}

export interface SoccerStanding {
	position: number;
	won: number;
	draw: number;
	lost: number;
	points: number;
	team: Team;
	playedGames: number;
}

export interface StandingsTable {
	home: SoccerStanding[];
	away: SoccerStanding[];
	total: SoccerStanding[];
}

export interface DateRange {
	startDate: string;
	endDate: string;
}

export interface SoccerStandingType {
	type: string;
	table: SoccerStanding[];
}

export interface Standings {
	season: DateRange;
	standings: SoccerStandingType[];
}

export interface SoccerStandingsReducerType {
	season: DateRange;
	standings: SoccerStandingType[];
	loading: boolean;
	error?: string;
}

export enum ActionType {
	FETCH_SOCCER_STANDINGS_REQUEST = "FETCH_SOCCER_STANDINGS_REQUEST",
	FETCH_SOCCER_STANDINGS_SUCCESS = "FETCH_SOCCER_STANDINGS_SUCCESS",
	FETCH_SOCCER_STANDINGS_ERROR = "FETCH_SOCCER_STANDINGS_ERROR",
}

export interface Action<T> {
	type: ActionType;
	payload?: T;
}
