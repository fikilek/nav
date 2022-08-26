import React from "react";
import { useParams } from "react-router-dom";

const Trns = () => {
	const { ml2 } = useParams();
	// console.log(`ml2: ${ml2}`);
	return (
		<div className="trns">
			<p>
				Transactions: <strong> {ml2 ? `${ml2}` : `Main Page`}</strong>
			</p>
		</div>
	);
};

export default Trns;
