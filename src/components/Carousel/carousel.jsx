import React, { useState } from "react";
import "./carousel.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

/**
 * 
 * @param {Array} pictures
 * 
 */
function Carousel(props){
    const [currentPicture, setCurrentPicture] = useState(1);

    function changePicture(newIndex){
        if(newIndex > props.pictures.length){
            setCurrentPicture(1);
        }
        else if(newIndex < 1){
            setCurrentPicture(props.pictures.length);
        }
        else{
            setCurrentPicture(newIndex);
        }
    }

    return(
        <div className="carousel">
            <img className="carousel__picture" src={props.pictures[currentPicture-1]} alt={`number ${currentPicture}`} />
            <FontAwesomeIcon className={`carousel__icon carousel__icon--previous ${props.pictures.length === 1 && "hide"}`} onClick={() => changePicture(currentPicture-1)} icon={faAngleDown} />
            <FontAwesomeIcon className={`carousel__icon carousel__icon--next ${props.pictures.length === 1 && "hide"}`} onClick={() => changePicture(currentPicture+1)} icon={faAngleDown} />
            <p className="carousel__count">{currentPicture}/{props.pictures.length}</p>
        </div>
    );
}

export default Carousel;