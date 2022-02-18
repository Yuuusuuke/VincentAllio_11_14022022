import React, { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import "./header.scss";
import logo from "../../ressources/images/logo.jpg";

function Header(){
    const [currentPage, setCurrentPage] = useState("");
    const location = useLocation(); // Send the current pathname (Hook from react router dom)
    
    useEffect(()=>{
        setCurrentPage(location.pathname);
    }, [location.pathname]);
    
    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt="logo Kasa" />
            <span className='header__blank'></span>
            <Link to="/" className={`header__link${currentPage === "/" ? " current" : ""}`}>Accueil</Link>
            <Link to="/about" className={`header__link${currentPage === "/about" ? " current" : ""}`}>A propos</Link>
        </header>
    );
}

export default Header;