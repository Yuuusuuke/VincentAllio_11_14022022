import React from "react";
import {Link} from "react-router-dom";
import "./404.scss";

function NotFound(){
    return(
        <>
            <div className="error">
                <h1 className="error__title">404</h1>
                <h2 className="error__description">Oups ! La page que vous demandez n'existe pas.</h2>
                <Link className="error__redirection" to="/">Retourner sur la page d'accueil</Link>
            </div>
        </>

    );
}

export default NotFound;