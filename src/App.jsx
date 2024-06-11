import "./App.css";
import getCurrentWatherFormatedData from "./components/Api/weatherApi";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";

import Topnav from "./components/Topnav";

function App() {
	const fetchWeather = async () => {
		const data = await getCurrentWatherFormatedData({ q: "dhaka" });
	};

	return (
		<>
			<div className="mx-auto max-w-screen-lg mt-4 my-4 px-32 py-3 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
				<Topnav />
				<Inputs />
				<TimeAndLocation />
				<TempAndDetails />
				<Forecast title="Hourley Forecast" />
				<Forecast title="Daily Forecast" />
			</div>
		</>
	);
}

export default App;
