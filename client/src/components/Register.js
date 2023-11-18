import React from "react";
import "../style/Register.css";
import { useRegisterModalContext } from "../utils/eventHandlersProvider";

const Login = () => {

    const { onClickCloseRegisterModal } = useRegisterModalContext();

    return (
        <div className="modal-overlay">
            <section className="register-box">
                <button onClick = {onClickCloseRegisterModal} id="close-btn">X</button>
                <h1 id="greeting">Join Us!</h1>
                <div className="horizontal-fields">
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />
                    </div>
                </div>
                <div className="horizontal-fields">
                    <div>
                        <label htmlFor="user-name">Username</label>
                        <input type="text" id="user-name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                </div>
                <div className="horizontal-fields">
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" />
                    </div>
                </div>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input type="date" id="date-of-birth" />
                <button id="register">Register</button>
                <h3>Already have an account? <a id = "login-button" href="/Login">Sign In</a></h3>
            </section>
        </div>
    );
};

export default Login;