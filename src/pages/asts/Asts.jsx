import React from "react";
import { useParams } from "react-router-dom";

const Asts = () => {
	const { ml2 } = useParams();
	// console.log(`ml2: ${ml2}`);
	return (
		<div className="asts">
			<p>
				Assets: <strong> {ml2 ? `${ml2}` : `Main Page`}</strong>
			</p>
		</div>
	);
};

export default Asts;
