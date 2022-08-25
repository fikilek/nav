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
						<NavLink to="/">
							<FaRubleSign />
						</NavLink>
					</div>
					<ul
						className={`nav-list ${menuStatus ? "" : "show"}`}
						onClick={() => setMenuStatus(true)}
					>
						{/* Dashboard */}
						<li>
							<NavLink to="/dbd">
								Dbd
								<MdArrowDropDown />
							</NavLink>
							<ul className="sub-menu">
								<li>
									<NavLink to="/dbd/fdrs">Feeders</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/pls">Poless</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/bxs">Boxes</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/ems">Meters</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/pls">Circuit Breakers</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/sls">Seals</NavLink>
								</li>
							</ul>
						</li>{" "}
						{/* Assets */}
						<li>
							<NavLink to="/dbd">
								Asts
								<MdArrowDropDown />
							</NavLink>
							<ul className="sub-menu">
								<li>
									<NavLink to="/dbd/fdrs">Feeders</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/pls">Poless</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/bxs">Boxes</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/ems">Meters</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/pls">Circuit Breakers</NavLink>
								</li>
								<li>
									<NavLink to="/dbd/sls">Seals</NavLink>
								</li>
							</ul>
						</li>
						{/* Transactions */}
						<li>
							<NavLink to="/trns">
								Trns
								<MdArrowDropDown />
							</NavLink>
							<ul className="sub-menu">
								<li>
									<NavLink to="/trns/grv">Goods Receiving</NavLink>
								</li>
								<li>
									<NavLink to="/trns/inst">Installations</NavLink>
								</li>
								<li>
									<NavLink to="/trns/com">Comissioning</NavLink>
								</li>
								<li>
									<NavLink to="/trns/dcom">Decomissioning</NavLink>
								</li>
								<li>
									<NavLink to="/trns/dcn">Disconnections</NavLink>
								</li>
								<li>
									<NavLink to="/trns/rcn">Reconnections</NavLink>
								</li>
								<li>
									<NavLink to="/trns/aud">Audit/Inspection</NavLink>
								</li>
								<li>
									<NavLink to="/trns/vnd">Vending</NavLink>
								</li>
								<li>
									<NavLink to="/trns/msng">Missing</NavLink>
								</li>
								<li>
									<NavLink to="/trns/fnd">Found</NavLink>
								</li>
								<li>
									<NavLink to="/trns/bts">Back To Supplier</NavLink>
								</li>
							</ul>
						</li>
						{/* Erfs */}
						<li>
							<NavLink to="/erfs">Erfs</NavLink>
						</li>
						{/* Body of Knowledge (Bok) */}
						<li>
							<NavLink to="/bok">Bok</NavLink>
						</li>
						{/* Admin */}
						<li>
							<NavLink to="/admin">
								Admin
								<MdArrowDropDown />
							</NavLink>
							<ul className="sub-menu">
								<li>
									<NavLink to="/admin/unps">Users</NavLink>
								</li>
								<li>
									<NavLink to="/admin/syst">
										System Tbles
										<MdArrowDropDown />
									</NavLink>
									<ul className="sub-menu">
										<li>
											<NavLink to="/admin/syst/urs">User Roles</NavLink>
										</li>
										<li>
											<NavLink to="/admin/syst/ast-stt">Assets States</NavLink>
										</li>
										<li>
											<NavLink to="/admin/syst/trn-stt">Transaction States</NavLink>
										</li>
									</ul>
								</li>
								<li>
									<NavLink to="/admin/mds">Mobile Devices</NavLink>
								</li>
								<li>
									<NavLink to="/admin/smcs">Simcards</NavLink>
								</li>
							</ul>
						</li>{" "}
						<li className="btn  move-right">
							<NavLink to="/unp">FK</NavLink>

							<ul className="sub-menu">
								<li>
									<NavLink to="/unp/prfl">Profile</NavLink>
								</li>

								<li>
									<NavLink to="/unp/sot">Sign Out</NavLink>
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
