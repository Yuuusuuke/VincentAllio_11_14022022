import React from "react";
import "./footer.scss";
import logo from "../../ressources/images/logoFooter.png";

function Footer(){
    return(
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Logo Kasa" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;