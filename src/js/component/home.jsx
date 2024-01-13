import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState ("red");


	return (
	<div>
		<div className="traffic-light container rounded ">
			<div onClick={() => setSelectedColor ("red")} className={"light red my-1 " + ((selectedColor === "red") ? "glow" : "")}></div>
			<div onClick={() => setSelectedColor ("yellow")} className={"light yellow my-1 "  + ((selectedColor === "yellow") ? "glow" : "")}></div>
			<div onClick={() => setSelectedColor ("green")} className={"light green my-1 "  + ((selectedColor === "green") ? "glow" : "")}></div>
			
		</div>
							
	</div>
	);
};

export default Home;
