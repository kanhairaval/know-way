import React from "react";
import "../style/Footer.css"

const Footer = () => {
    return(
        <section className = "footer">
            <ul>
                <li className = "footer-list">Contact Us</li>
                <li className = "footer-list">Careers</li>
            </ul>
            <footer className="footer-copyright">© 2023 KnoWay. All rights reserved.</footer>
        </section>
    );
};

export default Footer;