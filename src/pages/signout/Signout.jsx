import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signout = ({ setLoggedOn }) => {
	let navigate = useNavigate();
	return (
		<div className="signout">
			<p>Thanks for using iREPS</p>
      <button onClick={() => {
        setLoggedOn(false)
        navigate("/", { replace: true });
      }
        
      }>Logout</button>
		</div>
	);
};

export default Signout