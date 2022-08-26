import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Unp = () => {
	const userId = useParams();
	// console.log(userId);
	return (
		<div className="unp">
			<p>Data for user : {userId.id}</p>
		</div>
	);
};

export default Unp;
