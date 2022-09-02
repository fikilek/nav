import React, { useContext, useState } from "react";
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
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const initSigninData = {
	email: "",
	password: "",
};

const Signin = () => {
	const [userCredentials, setUserCredentials] = useState(initSigninData);
	const [emailFpw, setEmailFpw] = useState("");
	const [show, setShow] = useState(true);
	const { setWindowToOpen, setOpen } = useContext(ModalContext);
	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();

	const handleModalCloseBtn = e => {
		setOpen(false);
		setWindowToOpen("");
	};

	const handleSignup = e => {
		setWindowToOpen("signup");
		setOpen(true);
	};

	const handleSigninSubmit = e => {
		e.preventDefault();
		if (show) {
			console.log(`user credentials: `, userCredentials);
		} else {
			console.log(`user credentials: `, emailFpw);
		}
		setUserCredentials(initSigninData);
		setEmailFpw("");
		setUser({ ...user, signedon: true });
		setOpen(false);
		navigate("/unp", { replace: true });
	};

	return (
		<div className="signin-container">
			{/* signin header */}
			<div className="signin-header">
				<div className="signin-header-title-img">
					<h1 className="signin-header-title">Sign in</h1>
					<img src={irepsImage2} alt="ireps signin images" className="signin-img" />
				</div>
				<div className="signin-header-close-btn" onClick={handleModalCloseBtn}>
					<div className="btn-div" id="btn-div">
						<button>X</button>
					</div>
				</div>
			</div>

			<div className="forms" id="forms">
				<div className={`form-signin  ${show ? "signin-show" : "signin-hide"}  `}>
					{/* Signin form */}
					<form className={`signin-form`} onSubmit={handleSigninSubmit}>
						<div className="form-field form-field-email">
							<span className="form-field-icon">
								<MdEmail />
							</span>
							<input
								autoFocus
								type="email"
								name="email"
								id="email"
								value={userCredentials.email}
								onChange={e => {
									setUserCredentials({
										...userCredentials,
										[e.target.name]: e.target.value,
									});
								}}
								placeholder="enter email used for signin"
							/>
						</div>
						<div className="form-field form-field-password">
							<span className="form-field-icon">
								<MdPassword />
							</span>
							<input
								type="password"
								name="password"
								id="pwd"
								placeholder="Password"
								value={userCredentials.password}
								onChange={e => {
									setUserCredentials({
										...userCredentials,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div className="form-btns">
							<button
								className="form-btn Clear"
								onClick={e => setUserCredentials(initSigninData)}
							>
								Clear
							</button>
							<button
								className="form-btn reset"
								onClick={e => setUserCredentials(initSigninData)}
							>
								Reset
							</button>
							<button className="form-btn submit">Submit</button>
						</div>{" "}
						<div className="signin-footer">
							<div className="signin-footer-fpw">
								<a href="#" onClick={e => setShow(false)}>
									Forgot password?
								</a>
							</div>
							<div className="signin-footer-signup">
								<a href="#" onClick={handleSignup}>
									Sign up
								</a>
							</div>
						</div>
					</form>
				</div>

				<div className={`form-fwp  ${show ? "signin-hide" : "signin-show"} `}>
					{/* Forgotten ppwd form */}
					<form className="fpw-form" onSubmit={handleSigninSubmit}>
						<div className="form-field form-field-email">
							{/* email fiels */}
							<span className="form-field-icon">
								<FaUser />
							</span>
							<input
								type="email"
								name="emailFpw"
								id="emailFpw"
								value={emailFpw}
								onChange={e => setEmailFpw(e.target.value)}
								placeholder="enter email used for signin"
							/>
						</div>
						<div className="form-btns">
							<button className="form-btn Clear" onClick={e => setEmailFpw("")}>
								Clear
							</button>
							<button className="form-btn reset" onClick={e => setEmailFpw("")}>
								Reset
							</button>
							<button className="form-btn submit">Submit</button>
						</div>{" "}
					</form>
					
					<div className="signin-footer">
						<div className="signin-footer-fpw">
							<a href="#" onClick={e => setShow(true)}>
								Remembered password?
							</a>
						</div>
						<div className="signin-footer-signup">
							<a href="#" onClick={handleSignup}>
								Sign up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Signin;
