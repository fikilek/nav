import React from "react";
import "./dbd.css";
import { useParams } from "react-router-dom";

const Dbd = () => {
	const { ml2 } = useParams();
	// console.log(`ml2: ${ml2}`);
	return (
		<div className="dbd">
			<p>Dashboard</p>
			<p>
				<strong> {ml2 ? `${ml2}` : `Main Page`}</strong>
			</p>
		</div>
	);
};

export default Dbd;
