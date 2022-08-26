import React, { useState } from "react";
import { MdArrowDropDown, MdArrowRight, MdClose, MdMenu } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";
import { dataAdmin } from "./menuData/dataMenuAdmin";
import MenuBlock from "./MenuBlock";
import { dataBok } from "./menuData/dataMenuBox";
import { dataErfs } from "./menuData/dataMenuErfs";
import { dataUnp } from "./menuData/dataMenuUnp";
import { dataTrns } from "./menuData/dataMenuTrns";
import { dataAsts } from "./menuData/dataMenuAsts";

const Header = () => {
	console.log(dataAdmin)
	const [menuStatus, setMenuStatus] = useState(true);
	return (
		<header>
			<div className="container">
				<nav>
					<div className="logo">
						<NavLink to="/">
							<FaRubleSign />
						</NavLink>
					</div>
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
