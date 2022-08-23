import React from "react";
import { MdRestaurantMenu, MdArrowDropDown, MdClose, MdMenu, MdArrowRight } from "react-icons/md";

const Header = () => {
	return (
		<header>
			<div className="container">
				<nav>
					<div className="meni-icons">
						<MdMenu />
						<MdClose />
					</div>
					<a href="index.html" className="logo">
						<MdRestaurantMenu />
					</a>
					<ul className="nav-list">
						<li>
							<a href="#">Home</a>
						</li>
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
										<MdArrowRight />
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
												<MdArrowRight />
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
				</nav>
			</div>
		</header>
	);
};

export default Header;
