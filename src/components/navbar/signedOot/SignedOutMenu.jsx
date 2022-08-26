import React from "react";
import MenuBlock from "../MenuBlock";
import { dataBok } from "../menuData/dataMenuBox";
import { dataErfs } from "../menuData/dataMenuErfs";
import { dataSignIn } from "../menuData/dataMenuSignIn";
import { dataSignUp } from "../menuData/dataMenuSignUp";

const SignedOutMenu = ({ menuStatus, setMenuStatus }) => {
	return (
		<ul
			className={`nav-list ${menuStatus ? "" : "show"}`}
			onClick={() => setMenuStatus(true)}
		>
			{/* Erfs */}
			<MenuBlock menuData={dataErfs} />
			{/* Body of Knowledge (Bok) */}
			<MenuBlock menuData={dataBok} classes={"expand"} />
			{/* Sign up */}
			<MenuBlock menuData={dataSignUp} classes={"btn  move-right"} />
			{/* Sign in */}
			<MenuBlock menuData={dataSignIn} classes={"btn  move-right"} />
		</ul>
	);
};

export default SignedOutMenu;
