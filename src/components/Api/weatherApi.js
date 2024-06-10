const API_KEY = "a1efce8ef4596111f046468cc7eeb73f";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWwatherData = (infoType, searchParams) => {
	const url = new URL(BASE_URL + "/" + infoType);

	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

	return fetch(url)
		.then((res) => res.json())
		.then((data) => data);
};
