import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { ModalContext } from "../../contexts/ModalContext";
import { UserContext } from "../../contexts/UserContext";
import Signin from "../../pages/signin/Signin";
import Signup from "../../pages/signup/Signup";
import "./modal.css";

const Modal = () => {
	const { windowToOpen, setWindowToOpen, open, setOpen } = useContext(ModalContext);
	// const user = useContext(UserContext);
	// console.log(`user`, user);

	useEffect(() => {
		if (windowToOpen === "signup" || windowToOpen === "signin") {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [windowToOpen]);

	const handleClick = e => {
		setOpen(false);
		setWindowToOpen("");
	};

	return (
		<div
			className={open ? "modal-container modal-showModal" : "modal-container modal-hideModal"}
		>
			<div className="modal-background">
				<div className="modal-payload">
					{/* <div className="modal-header"> */}
						{/* <div className="modal-name">{windowToOpen} Modal</div>
						<button className="modal-name-btn" onClick={handleClick}>
							<MdClose />
						</button> */}
					{/* </div> */}

					<div className="modal-body">
						<>{windowToOpen === "signin" ? <Signin /> : ""}</>
						{/* <>{windowToOpen === "signup" ? <Signup /> : ""}</> */}
					</div>

					{/* <div className="modal-footer"></div> */}
				</div>
			</div>
		</div>
	);
};

export default Modal;
