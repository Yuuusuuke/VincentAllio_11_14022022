import React from 'react';
import "./home.scss";
import Card from "../Card/card";
import data from "../../ressources/logement.json"

function Home(){
    console.log(data);
    return(
        <>
            <section className='home__topPage'>
                <h1 className='home__topPage__title'>Chez vous, partout et ailleurs</h1>
            </section>

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