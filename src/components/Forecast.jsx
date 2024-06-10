const Forecast = ({ title }) => {
	return (
		<>
			<div className="flex items-center justify-start mt-6">
				<p className="text-white font-medium uppercase">{title}</p>
			</div>
			<hr className="my-2" />

			{/* Forecast Data */}
			<div className="flex flex-row items-center justify-between text-white">
				<div className="flex flex-col items-center justify-center gap-y-5">
					<p>4:40 PM</p>
					<img
						className="w-8"
						src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1717941616/Weather%20App/nxrmpqji4gwlqgywkv5j.png"
						alt=""
					/>
					<p>22&deg;</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-5">
					<p>4:40 PM</p>
					<img
						className="w-8"
						src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1717941616/Weather%20App/nxrmpqji4gwlqgywkv5j.png"
						alt=""
					/>
					<p>22&deg;</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-5">
					<p>4:40 PM</p>
					<img
						className="w-8"
						src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1717941616/Weather%20App/nxrmpqji4gwlqgywkv5j.png"
						alt=""
					/>
					<p>22&deg;</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-5">
					<p>4:40 PM</p>
					<img
						className="w-8"
						src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1717941616/Weather%20App/nxrmpqji4gwlqgywkv5j.png"
						alt=""
					/>
					<p>22&deg;</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-5">
					<p>4:40 PM</p>
					<img
						className="w-8"
						src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1717941616/Weather%20App/nxrmpqji4gwlqgywkv5j.png"
						alt=""
					/>
					<p>22&deg;</p>
				</div>
			</div>
		</>
	);
};

export default Forecast;
