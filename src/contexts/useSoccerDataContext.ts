import React from "react";
import { SoccerStanding, SoccerStandingsReducerType } from "../model/model";

export interface SoccerContextInterface {
	soccer: SoccerStandingsReducerType;
	league: string;
	setLeague: (value: string) => void;
	type: string;
	setType: (value: string) => void;
	tableData?: Array<SoccerStanding>;
}

export const SoccerContext = React.createContext<
	SoccerContextInterface | undefined
>(undefined);
