import React from "react";
import "../style/SuccessRegister.css";
import { useLoginModalContext } from "../utils/eventHandlersProvider";
import { useSuccessfulRegisterationModalContext } from "../utils/eventHandlersProvider";

const SuccessRegister = () => {

    const { onClickOpenLoginModal } = useLoginModalContext();
    const { onClickCloseSuccessfulRegistrationModal } = useSuccessfulRegisterationModalContext();

    return (
        <div className="modal-overlay">
            <section className="success-login-prompt">
                <button id = "close-btn" onClick = {onClickCloseSuccessfulRegistrationModal}>X</button>
                <h1 id = "success-register-greeting">Congratulations! Your registration was successful.</h1>
                <h3>Please <a id = "login-button" onClick = {() => { onClickOpenLoginModal(); onClickCloseSuccessfulRegistrationModal(); }}>Log In</a> to publish your first article.</h3>
            </section>
        </div>
    );
};

export default SuccessRegister;