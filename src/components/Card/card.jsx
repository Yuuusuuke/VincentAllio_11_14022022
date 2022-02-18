import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

/**
 * 
 * @param {Object} location
 * 
 */
function Card(props){
    return(
        <Link to={`/location/${props.location.id}`} className="card" key={props.location.id}>
            <img className="card__image" src={props.location.cover} alt={`${props.location.title}`} />
            <h2 className="card__title">{props.location.title}</h2>
        </Link>
    );
}

export default Card;