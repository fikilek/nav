import React from "react";
import MenuBlock from "../MenuBlock";
import { dataBok } from "../menuData/dataMenuBox";
import { dataErfs } from "../menuData/dataMenuErfs";
import { dataUnp } from "../menuData/dataMenuUnp";
import { dataTrns } from "../menuData/dataMenuTrns";
import { dataAsts } from "../menuData/dataMenuAsts";
import { dataAdmin } from "../menuData/dataMenuAdmin";

const SignedInMenu = ({ menuStatus, setMenuStatus }) => {
	return (
		<ul
			className={`nav-list ${menuStatus ? "" : "show"}`}
			onClick={() => setMenuStatus(true)}
		>
			{/* Dashboard */}
			<MenuBlock menuData={dataAsts} />
			{/* Assets */}
			<MenuBlock menuData={dataAsts} />
			{/* Transactions */}
			<MenuBlock menuData={dataTrns} />
			{/* Erfs */}
			<MenuBlock menuData={dataErfs} />
			{/* Body of Knowledge (Bok) */}
			<MenuBlock menuData={dataBok} />
			{/* Admin */}
			<MenuBlock menuData={dataAdmin} />
			{/* Unp */}
			<MenuBlock menuData={dataUnp} classes={"btn  move-right"} />
		</ul>
	);
};

export default SignedInMenu;
