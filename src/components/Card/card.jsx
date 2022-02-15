import React from "react";
import "./card.scss";

function Card(props){
    return(
        <>
        <div className="card" key={props.location.id}>
            <img className="card__image" src={props.location.cover} alt={`${props.location.title}`} />
            <h2 className="card__title">{props.location.title}</h2>
        </div>
        </>
    );
}

export default Card;