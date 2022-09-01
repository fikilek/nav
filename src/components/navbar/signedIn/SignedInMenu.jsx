import React, { useContext } from "react";
import MenuBlock from "../MenuBlock";
import { dataBok } from "../menuData/dataMenuBox";
import { dataErfs } from "../menuData/dataMenuErfs";
import { dataUnp } from "../menuData/dataMenuUnp";
import { dataTrns } from "../menuData/dataMenuTrns";
import { dataAsts } from "../menuData/dataMenuAsts";
import { dataAdmin } from "../menuData/dataMenuAdmin";
import { dataDbd } from "../menuData/dataMenuDbd";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../../contexts/ModalContext";

const SignedInMenu = ({ menuStatus, setMenuStatus }) => {
	const { setWindowToOpen, setOpen } = useContext(ModalContext);

	const handleClick = e => {
		setWindowToOpen(e.target.id);
		setOpen(true);
	};
	return (
		<ul
			className={`nav-list ${menuStatus ? "" : "show"}`}
			onClick={() => setMenuStatus(true)}
		>
			{/* Dashboard */}
			<MenuBlock menuData={dataDbd} />
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
			<li className="btn  move-right">
				<NavLink to="/unp">FK</NavLink>
				<ul className="sub-menu">
					<li>
						<NavLink to="/unp/profile">Profile</NavLink>
					</li>

					<li>
						<a href="#" onClick={handleClick} id="signout">
							Sign out
						</a>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default SignedInMenu;
