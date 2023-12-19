import React from "react";
import "../style/Footer.css";
import { useContactUsModalContext } from "../utils/eventHandlersProvider";
import { useCareersModalContext } from "../utils/eventHandlersProvider";
import Career from "../components/Career";
import ContactUs from "./ContactUs";

const Footer = () => {

    const { showContactUsModal, onClickOpenContactUsModal } = useContactUsModalContext();
    const { showCareersModal, onClickOpenCareersModal } = useCareersModalContext();

    return (
        <div>
            <footer className = "footer">
                <ul className = "footer-list">
                    <li className = "footer-items">Terms & Conditions</li>
                    <li className = "footer-items">Privacy Policy</li>
                    <li onClick = {onClickOpenContactUsModal} className = "footer-items">Contact Us</li>
                    <li onClick = {onClickOpenCareersModal} className = "footer-items">Careers</li>
                </ul>
                <p className = "footer-copyright">© 2023 KnoWay. All rights reserved.</p>
            </footer>
                {showContactUsModal && <ContactUs />}
                {showCareersModal && <Career />}
        </div>
    );
};

export default Footer;