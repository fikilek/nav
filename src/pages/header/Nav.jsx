import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
			<nav
				style={{
					borderBottom: "solid 1px",
					paddingBottom: "1rem",
				}}
			>
				<NavLink to="/">Home</NavLink>
				{/* <Link to="/test">Test</Link> */}
			</nav>
		);
}

export default Nav