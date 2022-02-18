import React, { useState } from "react";
import "./carousel.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function Carousel(props){
    const [currentPicture, setCurrentPicture] = useState(1);
    console.log(currentPicture);

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
            <FontAwesomeIcon className="carousel__icon carousel__icon--previous" onClick={() => changePicture(currentPicture-1)} icon={faAngleDown} />
            <FontAwesomeIcon className="carousel__icon carousel__icon--next" onClick={() => changePicture(currentPicture+1)} icon={faAngleDown} />
            <p className="carousel__count">{currentPicture}/{props.pictures.length}</p>
        </div>
    );
}

export default Carousel;