import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ setLoggedOn }) => {
	
	const navigate = useNavigate()
	return (
		<div className="signin">
			<p>Sign in into iREPS</p>
			<button
				onClick={() => {
					setLoggedOn(true);
					navigate("/", { replace: true });
				}}
			>
				Sign in
			</button>
		</div>
	);
};

export default Signin;
