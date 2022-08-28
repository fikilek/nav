import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import Signin from "../../pages/signin/Signin";
import Signup from "../../pages/signup/Signup";
import "./modal.css";

const Modal = () => {
	const [open, setOpen] = useState(false);
  const { windowToOpen, setWindowToOpen } = useContext(ModalContext);
  

	useEffect(() => {
		if (windowToOpen === "Sign up" || windowToOpen === "Sign in" ) {
			setOpen(true);
    } 
  }, [windowToOpen]);
  
  const handleClick = e => {
    setOpen(false);
    setWindowToOpen('');
  }

  return (
			<div
				className={open ? "modal-container showModal" : "modal-container hideModal"}
			>
				<div className="modal">Open `{windowToOpen}` Modal</div>
				<div>{ windowToOpen === "Sign in" ? <Signin /> : ''}</div>
				<div>{ windowToOpen === "Sign up" ? <Signup /> : ''}</div>
				<div>
					<button onClick={handleClick}>My Close</button>
				</div>
			</div>
		);
};

export default Modal;
