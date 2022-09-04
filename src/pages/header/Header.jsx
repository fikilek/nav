import React, { useContext, useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";
import SignedInMenu from "../../components/navbar/signedIn/SignedInMenu";
import SignedOutMenu from "../../components/navbar/signedOut/SignedOutMenu";
import Modal from "../../components/modals/Modal";
import { UserContext } from "../../contexts/UserContext";
import { MenuContext } from "../../contexts/MenuContext";

const Header = () => {
	const { menuStatus, setMenuStatus } = useContext(MenuContext)
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
						<SignedInMenu  />
					) : (
						<SignedOutMenu  />
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
