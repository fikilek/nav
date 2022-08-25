import React, { useState } from "react";
import { MdArrowDropDown, MdClose, MdMenu } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [menuStatus, setMenuStatus] = useState(true);
	return (
		<header>
			<div className="container">
				<nav>
					<div className="logo">
						{/* <NavLink to="/" > */}
						<FaRubleSign />
						{/* </NavLink> */}
					</div>
					<ul
						className={`nav-list ${menuStatus ? "" : "show"}`}
						onClick={() => setMenuStatus(true)}
					>
						{/* Dashboard */}
						<li>
							<a href="#">
								Dbd
								<MdArrowDropDown />
							</a>
							<ul className="sub-menu">
								<li>
									<a href="#">Feeders</a>
								</li>
								<li>
									<a href="#">Poles</a>
								</li>
								<li>
									<a href="#">Boxes</a>
								</li>
								<li>
									<a href="#">Meters</a>
								</li>
								<li>
									<a href="#">Cuicuit Breakers</a>
								</li>
								<li>
									<a href="#">Seals</a>
								</li>
							</ul>
						</li>{" "}
						{/* Assets */}
						<li>
							<a href="#">
								Asts
								<MdArrowDropDown />
							</a>
							<ul className="sub-menu">
								<li>
									<a href="#">Feeders</a>
								</li>
								<li>
									<a href="#">Poles</a>
								</li>
								<li>
									<a href="#">Boxes</a>
								</li>
								<li>
									<a href="#">Meters</a>
								</li>
								<li>
									<a href="#">Cuicuit Breakers</a>
								</li>
								<li>
									<a href="#">Seals</a>
								</li>
							</ul>
						</li>
						{/* Transactions */}
						<li>
							<a href="#">
								Trns
								<MdArrowDropDown />
							</a>
							<ul className="sub-menu">
								<li>
									<a href="#">Goods Receiving</a>
								</li>
								<li>
									<a href="#">Installations</a>
								</li>
								<li>
									<a href="#">Comissioning</a>
								</li>
								<li>
									<a href="#">Decomissioning</a>
								</li>
								<li>
									<a href="#">Disconnection</a>
								</li>
								<li>
									<a href="#">Reconnection</a>
								</li>
								<li>
									<a href="#">Audit/Inspection</a>
								</li>
								<li>
									<a href="#">Vending</a>
								</li>
								<li>
									<a href="#">Missing</a>
								</li>
								<li>
									<a href="#">Found</a>
								</li>
								<li>
									<a href="#">Back To Supplier</a>
								</li>
							</ul>
						</li>
						{/* Erfs */}
						<li>
							<a href="#">Erfs</a>
						</li>
						{/* Body of Knowledge (Bok) */}
						<li>
							<a href="#">Bok</a>
						</li>
						{/* Admin */}
						<li>
							<a href="#">
								Admin
								<MdArrowDropDown />
							</a>
							<ul className="sub-menu">
								<li>
									<a href="#">Users</a>
								</li>
								<li>
									<a href="#">
										System Tables
										<MdArrowDropDown />
									</a>
									<ul className="sub-menu">
										<li>
											<a href="#">User Roles</a>
										</li>
										<li>
											<a href="#">Assets States</a>
										</li>
										<li>
											<a href="#">Transaction States</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Mobile Devices</a>
								</li>
								<li>
									<a href="#">Simcards</a>
								</li>
							</ul>
						</li>{" "}
						<li className="btn  move-right">
							<a href="#">FK</a>

							<ul className="sub-menu">
								<li>
									<a href="#">Profile</a>
								</li>

								<li>
									<a href="#">Sign Out</a>
								</li>
							</ul>
						</li>
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
