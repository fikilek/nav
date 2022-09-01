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

	const handleSignoutCloseBtn = e => {
		// TODO: Thee is a bug: a click on svg does not close modal. Find a fix.
		// console.log(`handleSignoutCloseBtn e.target.id:`, e.target);
		if (e.target.id === "signout-keep") {
			// dont close the window but remove or close modal
			setOpen(false); //Close modal
		} else {
			// sign user out, close modal and navigate to Home
			setUser({ ...user, signedon: false }); //logout user
			setOpen(false); //Close modal
			navigate("/", { replace: true });
		}
	};
	return (
		<div className="signin-container">
			<div className="signout">
				<h1>Thanks for using iREPS</h1>
				<div className="signout-confirm-btns">
					<button
						className="close-btn"
						id="signout-keep"
						onClick={handleSignoutCloseBtn}
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
