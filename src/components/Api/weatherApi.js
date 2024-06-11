const API_KEY = "a1efce8ef4596111f046468cc7eeb73f";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWwatherData = async (infoType, searchParams) => {
	const url = new URL(BASE_URL + "/" + infoType);

	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

	return fetch(url).then((res) => res.json());
};

const formatCurrentWeatherData = (data) => {
	const {
		coord: { lon, lat },
		main: { temp, temp_min, temp_max, humidity },
		wind: { speed },
		weather,
		name,
		dt,
		sys: { country, sunrise, sunset },
	} = data;

	const { main: details, icon } = weather[0];

	return {
		lat,
		lon,
		temp,
		temp_min,
		temp_max,
		humidity,
		speed,
		name,
		dt,
		country,
		sunrise,
		sunset,
		details,
		icon,
	};
};

const formatForecastWeather = () => {};

const getCurrentWatherFormatedData = async (searchParams) => {
	const getDataFromApi = await getWwatherData("weather", searchParams).then(
		formatCurrentWeatherData
	);

	const { lat, lon } = getDataFromApi;

	const formatedWeather = await getWwatherData("onecall", {
		lat,
		lon,
		exclude: "current,minutely,alerts",
		units: searchParams.units,
	}).then(formatForecastWeather);

	return getDataFromApi;
};

export default getCurrentWatherFormatedData;
