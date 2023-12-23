import React, { useEffect } from "react";
import "../style/Register.css";
import { useRegisterModalContext } from "../utils/eventHandlersProvider";
import { useLoginModalContext } from "../utils/eventHandlersProvider";
import { RegisterFormDataHandler } from "../utils/eventHandlersProvider";
// import SuccessRegister from "../components/SuccessRegister";
import { useSuccessfulRegisterationModalContext } from "../utils/eventHandlersProvider";

const Register = () => {

    const { onClickCloseRegisterModal } = useRegisterModalContext();
    const { onClickOpenLoginModal } = useLoginModalContext();
    const { registerFormData, successfulRegistration, HandleRegisterInputChange, passwordMatchError, onClickRegisterButton } = RegisterFormDataHandler();
    const { openSuccessfulRegistration } = useSuccessfulRegisterationModalContext();

    // useEffect(() => {
    //     if (successfulRegistration) {
    //         onClickCloseRegisterModal();
    //     }
    // }, [successfulRegistration, onClickCloseRegisterModal]);

    // useEffect(() => {
    //     if (successfulRegistration) {
    //         openSuccessfulRegistration();
    //     }
    // }, [successfulRegistration, openSuccessfulRegistration]);

    return (
        <div className="modal-overlay">
            <section className="register-box">
                <button onClick = {onClickCloseRegisterModal} id="close-btn">X</button>
                <h1 id="greeting">Join Us!</h1>
                <div className="horizontal-fields">
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="firstName" value={registerFormData.firstName} onChange={HandleRegisterInputChange} />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="lastName" value={registerFormData.lastName} onChange={HandleRegisterInputChange} />
                    </div>
                </div>
                <div className="horizontal-fields">
                    <div>
                        <label htmlFor="user-name">Username</label>
                        <input type="text" id="userName" value={registerFormData.userName} onChange={HandleRegisterInputChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={registerFormData.email} onChange={HandleRegisterInputChange} />
                    </div>
                </div>
                <div className="horizontal-fields">
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={registerFormData.password} onChange={HandleRegisterInputChange} />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirmPassword" value={registerFormData.confirmPassword} onChange={HandleRegisterInputChange} />
                    </div>
                </div>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input type="date" id="dOfb" value={registerFormData.dOfb} onChange={HandleRegisterInputChange} />
                <button id="register" onClick = {onClickRegisterButton}>Register</button>
                <h3>Already have an account? <a id = "login-button" onClick = {() => { onClickOpenLoginModal(); onClickCloseRegisterModal();}}>Log In</a></h3>
                {passwordMatchError && (<p className="error-message">Passwords do not match!</p>)}
            </section>
        </div>
    );
};

export default Register;