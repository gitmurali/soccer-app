export const apiBaseRoute = process.env.REACT_APP_API_BASE_URL;
export const Token = `${process.env.REACT_APP_API_TOKEN}`;

export enum MethodType {
	GET = "GET",
}

/**
 * fetchApi is a function to make a api call
 * @param method - http method
 * @param url - http url to make a request to
 * @param data - http post body
 * @returns ScoreStandingsData: Promise<SoccerStandingsReducerType|*>
 * */
export const fetchApi = async ({ method = "GET", url = "", data = {} }) => {
	const headers: any = {
		"X-Auth-Token": Token,
	};
	return fetch(`${apiBaseRoute}${url}`, {
		body: method === "GET" ? undefined : JSON.stringify(data),
		cache: "no-cache",
		headers,
		method,
	})
		.then((response) => response.json())
		.then((result) => result);
};
