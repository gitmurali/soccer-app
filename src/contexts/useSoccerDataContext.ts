import React, { createContext } from "react";
import { SoccerStanding, SoccerStandingsReducerType } from "../model/model";

export interface SoccerContextInterface {
	soccer?: SoccerStandingsReducerType;
	league?: string;
	setLeague?: (value: string) => void;
	type?: string;
	setType?: (value: string) => void;
	tableData?: Array<SoccerStanding>;
}

/**
 * Soccer Context for header and standings table
 */
export const SoccerContext = createContext<SoccerContextInterface | undefined>(
	undefined
);
