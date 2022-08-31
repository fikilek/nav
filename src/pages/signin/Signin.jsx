import React, { useState } from "react";
import "./signin.css";
import {
	FaFacebookF,
	FaGoogle,
	FaLinkedinIn,
	FaTwitter,
	FaUser,
} from "react-icons/fa";
import { MdPassword } from "react-icons/md";

const Signin = () => {
	return (
		<div className="signin-container">
			<div className="signin-header"></div>

			<form className="signin-form">
				<div className="form-field form-field-email">
					<span className="form-field-icon">
						<FaUser />
					</span>
					<input type="email" name="email" id="email" placeholder="email" />
				</div>
				<div className="form-field form-field-password">
					<span className="form-field-icon">
						<MdPassword />
					</span>
					<input type="password" name="password" id="pwd" placeholder="Password" />
				</div>
				<div className="form-btns">
					<button className="form-btn Clear">Clear</button>
					<button className="form-btn reset">Reset</button>
					<button className="form-btn submit">Submit</button>
				</div>{" "}
				<div className="signin-footer">
					<div className="signin-footer-fpw">
						<a href="#">Forget password?</a>
					</div>
					<div className="signin-footer-signup">
						<a href="#">Sign up</a>
					</div>
				</div>
			</form>
		</div>
	);
};
export default Signin;
