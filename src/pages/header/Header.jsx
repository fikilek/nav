import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";
import SignedInMenu from "../../components/navbar/signedIn/SignedInMenu";
import SignedOutMenu from "../../components/navbar/signedOot/SignedOutMenu";

const Header = () => {
	const [menuStatus, setMenuStatus] = useState(true);
	const [signedOn, setSignedOn] = useState(false);
	return (
		<header>
			<div className="container">
				<nav>
					<div className="logo">
						<NavLink to="/">
							<FaRubleSign />
						</NavLink>
					</div>
					{/* <div> */}
					{signedOn ? (
						<SignedInMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
					) : (
						<SignedOutMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
					)}
					{/* </div> */}

					<div className="menu-icons" onClick={() => setMenuStatus(!menuStatus)}>
						{menuStatus ? <MdMenu /> : <MdClose />}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;

// TODO: Introduce React Router
