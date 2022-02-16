import React, {useState} from "react";
import "./dropdown.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function Dropdown(props){
    const [dropdownStatus, setDropdownStatus] = useState("");
    return(
        <div className={`dropdown ${dropdownStatus}`}>
            <div className="dropdown__header" onClick={() => {setDropdownStatus((dropdownStatus === "" ? "open" : ""))}}>
                <h2 className="dropdown__header__title">{props.title}</h2>
                <FontAwesomeIcon className="dropdown__header__icon" icon={faAngleDown} />
            </div>
            <p className="dropdown__description">{props.description}</p>
        </div>
    );
}

export default Dropdown;