import "./App.css";
import Inputs from "./components/Inputs";

import Topnav from "./components/Topnav";

function App() {
	return (
		<>
			<div className="mx-auto max-w-screen-md mt-4 my-4 px-32 py-3 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
				<Topnav />
				<Inputs />
			</div>
		</>
	);
}

export default App;
