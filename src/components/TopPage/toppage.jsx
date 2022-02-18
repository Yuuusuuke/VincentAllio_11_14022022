import React from "react";
import "./toppage.scss";

/**
 * 
 * @param {string} page 
 * @param {string} title 
 * 
 */
function TopPage(props){
    return(
        <section className={`topPage ${props.page}`}>
                <h1 className='topPage__title'>{props.title}</h1>
        </section>
    );
}

export default TopPage;