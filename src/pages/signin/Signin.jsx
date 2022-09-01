import React, { useState } from "react";
import "./signin.css";
import {
	FaFacebookF,
	FaGoogle,
	FaLinkedinIn,
	FaTwitter,
	FaUser,
	FaVoicemail,
} from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";
import irepsImage2 from "../../images/irepsImage1.jpg";

const Signin = () => {
	const [show, setShow] = useState(true);
	return (
		<div className="signin-container">
			{/* signin header */}
			<div className="signin-header">
				<div className="signin-header-title-img">
					<h1 className="signin-header-title">Sign in</h1>
					<img src={irepsImage2} alt="ireps signin images" className="signin-img" />
				</div>
				<div className="signin-header-close-btn">
					<div className="btn-div">
						<button>X</button>
					</div>
				</div>
			</div>

			<div className="forms">
				<div className={`form-signin  ${show ? "signin-show" : "signin-hide"}  `}>
					{/* Signin form */}
					<form className={`signin-form  `}>
						<div className="form-field form-field-email">
							<span className="form-field-icon">
								<MdEmail />
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
								<a href="#" onClick={e => setShow(false)}>
									Forgot password?
								</a>
							</div>
							<div className="signin-footer-signup">
								<a href="#">Sign up</a>
							</div>
						</div>
					</form>
				</div>
				{/* <div className="form-fpw "> */}
				<div className={`form-fwp  ${show ? "signin-hide" : "signin-show"} `}>
					{/* Forgotten ppwd form */}
					<form className="fpw-form">
						<div className="form-field form-field-email">
							{/* email fiels */}
							<span className="form-field-icon">
								<FaUser />
							</span>
							<input type="email" name="email" id="email" placeholder="email" />
						</div>
						<div className="form-btns">
							<button className="form-btn Clear">Clear</button>
							<button className="form-btn reset">Reset</button>
							<button className="form-btn submit">Submit</button>
						</div>{" "}
						<div className="signin-footer">
							<div className="signin-footer-fpw">
								<a href="#" onClick={e => setShow(true)}>
									Remembered password?
								</a>
							</div>
							<div className="signin-footer-signup">
								<a href="#">Sign up</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Signin;
