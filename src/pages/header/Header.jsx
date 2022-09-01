import React, { useContext, useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";
import SignedInMenu from "../../components/navbar/signedIn/SignedInMenu";
import SignedOutMenu from "../../components/navbar/signedOut/SignedOutMenu";
import Modal from "../../components/modals/Modal";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
	const [menuStatus, setMenuStatus] = useState(false);
	const { user } = useContext(UserContext);
	// console.log(`menuStatus`, menuStatus);

	return (
		<header>
			<div className="container">
				<nav>
					<div className="logo">
						<NavLink to="/">
							<FaRubleSign />
						</NavLink>
					</div>
					{user.signedon ? (
						<SignedInMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
					) : (
						<SignedOutMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
					)}

					<div className="menu-icons" onClick={() => setMenuStatus(!menuStatus)}>
						{menuStatus ?  <MdClose /> : <MdMenu />}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;

// TODO: Introduce React Router
