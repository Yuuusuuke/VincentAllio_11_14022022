import React, {useState} from "react";
import "./dropdown.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

/**
 * 
 * @param {string} state
 * @param {string} title
 * @param {Array or string} description
 * 
 */
function Dropdown(props){
    const [dropdownStatus, setDropdownStatus] = useState(props.state != null ? props.state : "");

    var description;

    if(props.description instanceof Array){
        description = props.description.reduce((element, item) => (
            `${element}\n${item}`
        ))
    }
    else{
        description = props.description;
    }

    return(
        <div className={`dropdown ${dropdownStatus}`}>
            <div className="dropdown__header" onClick={() => {setDropdownStatus((dropdownStatus === "" ? "open" : ""))}}>
                <h2 className="dropdown__header__title">{props.title}</h2>
                <FontAwesomeIcon className="dropdown__header__icon" icon={faAngleDown} />
            </div>
            <div className="dropdown__description">
                {description}
            </div>
        </div>
    );
}

export default Dropdown;