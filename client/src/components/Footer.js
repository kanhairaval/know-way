// import React from "react";
// import { Link } from 'react-router-dom';
// import "../style/Footer.css";

// const Footer = () => {
//     return (
//         <footer className = "footer">
//             <ul className = "footer-list">
//                 <div className = "list-div-1">
//                     <li className = "footer-items" id = "item-1">Terms & Conditions</li>
//                     <li className = "footer-items" id = "item-2">Privacy Policy</li>
//                 </div>
//                 <div className = "list-div-2">
//                     <li className = "footer-items" id = "item-3">Contact Us</li>
//                     <li className = "footer-items" id = "item-4">Careers</li>
//                 </div>
//             </ul>
//             <p className = "footer-copyright">© 2023 KnoWay. All rights reserved.</p>
//         </footer>
//     );
// };

// export default Footer;



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