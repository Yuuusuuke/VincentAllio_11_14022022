import React from "react";
import "./toppage.scss";

function TopPage(props){
    return(
        <section className={`topPage ${props.page}`}>
                <h1 className='topPage__title'>{props.title}</h1>
        </section>
    );
}

export default TopPage;