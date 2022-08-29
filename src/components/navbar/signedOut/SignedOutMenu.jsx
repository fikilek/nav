import React, { useContext, useEffect } from "react";
import MenuBlock from "../MenuBlock";
import { dataBok } from "../menuData/dataMenuBox";
import { dataErfs } from "../menuData/dataMenuErfs";
import { ModalContext } from "../../../contexts/ModalContext";

const SignedOutMenu = ({ menuStatus, setMenuStatus }) => {
	const { setWindowToOpen } = useContext(ModalContext);
	const handleClick = e => {
		setWindowToOpen(e.target.id);
	};

	return (
		<ul className={`nav-list ${menuStatus ? "" : "show"}`}>
			{/* Erfs */}
			<MenuBlock menuData={dataErfs} />
			{/* Body of Knowledge (Bok) */}
			<MenuBlock menuData={dataBok} classes={"expand"} />
			{/* Sign up */}
			{/* <MenuBlock menuData={dataSignUp} classes={"btn  move-right"} /> */}
			<li className="btn  move-right">
				<a href="#" onClick={handleClick} id='signup'>
					Sign up
				</a>
			</li>
			{/* Sign in */}
			{/* <MenuBlock menuData={dataSignIn} classes={"btn  move-right"} /> */}
			<li className="btn  move-right">
				<a href="#" onClick={handleClick} id='signin'>
					Sign in
				</a>
			</li>
		</ul>
	);
};

export default SignedOutMenu;
