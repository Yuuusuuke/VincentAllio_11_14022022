import React, { useContext } from 'react';
import "./home.scss";
import Card from "../Card/card";
import {dataContext} from "../../context/dataContext";
import TopPage from "../TopPage/toppage";

function Home(){
    const data = useContext(dataContext);
    return(
        <>
            <TopPage title="Chez vous, partout et ailleurs" page="home" />
            <section className='home__table'>
                {data.map((location, index) => 
                    <Card location={location} key={index} />
                )}
            
                {data.length%3 === 2 && <span className='home__table__blank'></span> } {/* Display a blank when the lenght is 3x+2 multiple */}
            </section>
        </>
    );
}

export default Home;