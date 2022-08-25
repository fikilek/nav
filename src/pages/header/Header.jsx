import React, { useState } from "react";
import { MdArrowDropDown, MdClose, MdMenu } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [menuStatus, setMenuStatus] = useState(true);
	console.log(`meunStatus`, menuStatus)
	return (
		<header>
			<div className="container">
				<nav>
					<div className="logo">
						{/* <NavLink to="/" > */}
						<FaRubleSign />
						{/* </NavLink> */}
					</div>
					<ul className={`nav-list ${menuStatus ? '' : 'show' }`} onClick={() => setMenuStatus(true)}>
					{/* <ul className="nav-list" onClick={() => setMenuStatus(true)}> */}
						<li>
							<a href="#">
								Menu
								<MdArrowDropDown />
							</a>
							<ul className="sub-menu">
								<li>
									<a href="#">Breakfast</a>
								</li>
								<li>
									<a href="#">
										Lunch
										<MdArrowDropDown />
									</a>
									<ul className="sub-menu">
										<li>
											<a href="#">Food</a>
										</li>
										<li>
											<a href="#">Food</a>
										</li>
										<li>
											<a href="#">
												More ...
												<MdArrowDropDown />
											</a>
											<ul className="sub-menu">
												<li>
													<a href="#">Food</a>
												</li>
												<li>
													<a href="#">Food</a>
												</li>
												<li>
													<a href="#">Food</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Breakfast</a>
								</li>
								<li>
									<a href="#">Breakfast</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Our Cheffs</a>
						</li>
						<li>
							<a href="#">Gallery</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
						<li className="btn  move-right">
							<a href="#">Book a table</a>
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
