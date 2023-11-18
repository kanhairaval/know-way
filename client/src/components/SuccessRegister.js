import React from "react";
import "../style/SuccessRegister.css";

const SuccessRegister = () => {

    // const { onClickCloseLoginModal } = useLoginModalContext();

    return (
        <div className="modal-overlay">
            <section className="success-login-prompt">
                <button id = "close-btn">X</button>
                <h1 id = "success-register-greeting">Congratulations! Your registration was successful.</h1>
                <h3>Please <a id = "login-button" href = "/Login">Sign In</a> to publish your first article.</h3>
            </section>
        </div>
    );
};

export default SuccessRegister;