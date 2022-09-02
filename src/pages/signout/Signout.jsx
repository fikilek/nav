import React, { useContext, useState } from "react";
import "./signout.css";
import { MdCheck, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";

const Signout = () => {
	const { setWindowToOpen, setOpen } = useContext(ModalContext);
	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();

	const handleSignoutKeepBtn = e => {
		// dont close the window but remove or close modal
		setOpen(false); //Close modal
	};

	const handleSignoutCloseBtn = e => {
		// sign user out, close modal and navigate to Home
		setUser({ ...user, signedon: false }); //logout user
		setOpen(false); //Close modal
		navigate("/", { replace: true });
	};

	return (
		<div className="signin-container">
			<div className="signout">
				<h1>Thanks for using iREPS</h1>
				<div className="signout-confirm-btns">
					<button
						className="close-btn"
						id="signout-keep"
						onClick={handleSignoutKeepBtn}
					>
						<MdClose />
					</button>
					<button
						className="close-btn"
						id="signout-close"
						onClick={handleSignoutCloseBtn}
					>
						<MdCheck />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signout;
