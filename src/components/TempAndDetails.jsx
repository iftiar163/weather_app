import {
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";

const TempAndDetails = () => {
	return (
		<>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300">
				<p>Clear Or Whatever</p>
			</div>

			{/* Current Weather */}
			<div className="flex flex-row justify-between items-center py-3 text-white">
				<img
					className="w-10"
					src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1717941616/Weather%20App/nxrmpqji4gwlqgywkv5j.png"
					alt=""
				/>

				<p className="text-4xl">34 &deg;C</p>

				<div className="flex flex-col space-y-2">
					<div className="flex items-center justify-center font-light text-sm">
						<UilTemperature size={18} className="mr-1" />
						Feels Like
						<span className="font-medium ml-1">32&deg;</span>
					</div>

					<div className="flex items-center justify-center font-light text-sm">
						<UilTear size={18} className="mr-1" />
						Humidity
						<span className="font-medium ml-1">89%</span>
					</div>

					<div className="flex items-center justify-center font-light text-sm">
						<UilWind size={18} className="mr-1" />
						Wind
						<span className="font-medium ml-1">65 km/h</span>
					</div>
				</div>
			</div>

			<div className="flex flex-row justify-center items-center text-white space-x-2 text-sm py-3">
				<UilSun />
				<p className="font-light">
					Rise : <span className="font-medium ml-1">06:45 AM</span>
				</p>
				<p className="font-light">|</p>

				<UilSunset />
				<p className="font-light">
					Set : <span className="font-medium ml-1">06:45 PM</span>
				</p>
				<p className="font-light">|</p>

				<UilTemperature />
				<p className="font-light">
					High : <span className="font-medium ml-1">38&deg;</span>
				</p>
				<p className="font-light">|</p>

				<UilTemperature />
				<p className="font-light">
					Low : <span className="font-medium ml-1">28&deg;</span>
				</p>
			</div>
		</>
	);
};

export default TempAndDetails;
