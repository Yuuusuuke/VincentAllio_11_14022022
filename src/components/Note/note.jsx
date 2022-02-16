import React from "react";
import "./note.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";


function Note(props){
    var content = [];
    for(var i = 1; i < 6; i++){
        if(i <= props.value){
            content.push(<FontAwesomeIcon icon={faStar} />);
        }
        else{
            content.push(<FontAwesomeIcon icon={faStarRegular} />);
        }
    }

    return(
        <div className="noteTable">
            {content}
        </div>
    );
}

export default Note;