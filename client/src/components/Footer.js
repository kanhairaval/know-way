import React from "react";
import { Link } from 'react-router-dom';
import "../style/Footer.css";

const Footer = () => {
    return (
        <footer className = "footer">
            <ul className = "footer-list">
                <li className = "footer-items">Terms & Conditions</li>
                <li className = "footer-items">Privacy Policy</li>
                <li className = "footer-items">Contact Us</li>
                <li className = "footer-items">Careers</li>
            </ul>
            <p className = "footer-copyright">© 2023 KnoWay. All rights reserved.</p>
        </footer>
    );
};

export default Footer;