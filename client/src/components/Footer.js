import React from "react";
import "../style/Footer.css";
import { useContactUsModalContext } from "../utils/eventHandlersProvider";
import { useCareersModalContext } from "../utils/eventHandlersProvider";
import { Link } from 'react-router-dom';

const Footer = () => {

    const { onClickOpenContactUsModal } = useContactUsModalContext();
    const { onClickOpenCareersModal } = useCareersModalContext();

    return (
        <footer className = "footer">
            <ul className = "footer-list">
                <li className = "footer-items">Terms & Conditions</li>
                <li className = "footer-items">Privacy Policy</li>
                <li onClick = {onClickOpenContactUsModal} className = "footer-items">Contact Us</li>
                <li onClick = {onClickOpenCareersModal} className = "footer-items">Careers</li>
            </ul>
            <p className = "footer-copyright">© 2023 KnoWay. All rights reserved.</p>
        </footer>
    );
};

export default Footer;