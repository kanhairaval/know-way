import React, { useEffect } from "react";
import "../style/Login.css";
import { useLoginModalContext } from "../utils/eventHandlersProvider";
import { useRegisterModalContext } from "../utils/eventHandlersProvider";
import { LoginFormDataHandler } from "../utils/eventHandlersProvider";

const Login = () => {

    const { onClickCloseLoginModal } = useLoginModalContext();
    const { onClickOpenRegisterModal } = useRegisterModalContext();
    const { loginFormData, handleLoginInput, successfulLogin, onClickLoginButton } = LoginFormDataHandler();

    useEffect(() => {
        if (successfulLogin) {
            onClickCloseLoginModal();
        }
    }, [successfulLogin, onClickCloseLoginModal]);

    return (
        <div className="modal-overlay">
            <section className="login-box">
                <button onClick = {onClickCloseLoginModal} id = "close-btn">X</button>
                <h1 id = "login-greeting">Welcome Back!</h1>
                <label htmlFor = "email">Email</label>
                <input type = "email" id = "email" value={loginFormData.email} onChange={handleLoginInput}/>
                <label htmlFor = "password">Password</label>
                <input type = "password" id = "password" value={loginFormData.password} onChange={handleLoginInput}/>
                <button id = "sign-in" onClick = {onClickLoginButton}>Sign In</button>
                <h3>Don't have an account? <a id = "register-button" onClick = {() => { onClickOpenRegisterModal(); onClickCloseLoginModal();}}>Register</a></h3>
            </section>
        </div>
    );
};

export default Login;