import React from "react";
import "./note.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";

/**
 * 
 * @param {integer} value 
 * 
 */
function Note(props){
    var content = [];
    for(var i = 1; i < 6; i++){
        if(i <= props.value){
            content.push(<FontAwesomeIcon key={i} icon={faStar} />);
        }
        else{
            content.push(<FontAwesomeIcon key={i} icon={faStarRegular} />);
        }
    }

    return(
        <div className="noteTable">
            {content}
        </div>
    );
}

export default Note;