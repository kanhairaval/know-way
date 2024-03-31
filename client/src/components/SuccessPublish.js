import React from "react";
import "../style/SuccessPublish.css";
import { useSuccessfulPublishModalContext } from "../utils/eventHandlersProvider";

const SuccessPublish = () => {

    const { onClickCloseSuccessfulPublishModal } = useSuccessfulPublishModalContext();

    return (
        <div className="modal-overlay">
            <section className="success-login-prompt">
                <button id = "close-btn" onClick = {() => { onClickCloseSuccessfulPublishModal(); window.location.reload();}}>X</button>
                <h1 id = "success-register-greeting">Congratulations! Your article was published.</h1>
            </section>
        </div>
    );
};

export default SuccessPublish;