import React from "react";
import "../style/Career.css";

const Career = () => {

    return (
        <div className="modal-overlay">
            <section className="career-box">
                <button id = "close-btn">X</button>
                <h3 id = "success-register-greeting">Welcome! Although we are not actively recruiting at the moment, we highly value your insights and encourage collaboration to enhance KnoWay. If you have ideas for improvement and would like to contribute, please feel free to share your thoughts with us through the <a id = "contact-us" href = "/ContactUs">Contact Us</a> section.</h3>
            </section>
        </div>
    );
};

export default Career;