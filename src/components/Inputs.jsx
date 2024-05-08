import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

const Inputs = () => {
	return (
		<div className="flex flex-row justify-center my-6">
			<div className="flex flex-row justify-center items-center w-3/4 space-x-4">
				<input
					type="text"
					placeholder="Search...."
					className="text-xl font-light p-2 w-full shadow-xl focus:outline-none"
				/>
				<UilSearch
					size={25}
					className="text-white cursor-pointer transition ease-in-out hover:scale-125"
				/>
				<UilMapMarker
					size={25}
					className="text-white cursor-pointer transition ease-in-out hover:scale-125"
				/>
			</div>
			<div className="flex flex-row w-1/4 items-center justify-center">
				<button name="metric" className="text-xl text-white font-light">
					&deg;C
				</button>
				<p className="text-white mx-1">|</p>
				<button name="imperial" className="text-xl text-white font-light">
					&deg;F
				</button>
			</div>
		</div>
	);
};

export default Inputs;
