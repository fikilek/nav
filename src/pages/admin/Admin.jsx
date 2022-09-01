import React from "react";
import './admin.css'
import { useParams } from "react-router-dom";

const Admin = () => {
	const { ml2, ml3 } = useParams();
	// console.log(`ml2: ${ml2}`);
	// console.log(`ml3: ${ml3}`);
	const menuLevel3 = ml3 ? ml3 : ''
	return (
		<div className="admin">
			<p>
				Admin: <strong> {ml2 ? `${ml2} ${menuLevel3}` : `Main Page`}</strong>
			</p>
		</div>
	);
};

export default Admin;
