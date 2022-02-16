import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import Dropdown from "../Dropdown/dropdown";
import "./location.scss";

function Location(){
    const {id} = useParams()
    const data = useContext(dataContext);
    const location = data.find(element => element.id === id);
    console.log(data);
    console.log(location);

    const nameHost = location.host.name.split(" ");

    return(
        <>
            <section className="location">
                <header className="location__header">
                    <div className="location__header__title">
                        <h1 className="location__header__title__name">{location.title}</h1>
                        <h2 className="location__header__title__place">{location.location}</h2>
                        {/** TODO: Tags **/}
                    </div>
                    <div className="location__header__host">
                        <p className="location__header__host__name">{nameHost.reduce((result, item) => (`${result}\n${item}`))}</p>
                        <img className="location__header__host__picture" src={location.host.picture} alt="host" />
                        {/** TODO: Note **/}
                    </div>
                </header>

                <div className="location__content">
                    <div className="location__content__dropdown">
                        <Dropdown title="Description" description={location.description} />
                    </div>
                    <div className="location__content__dropdown">
                        <Dropdown title="Equipements" description={location.equipments} /> 
                    </div>
                </div>
            </section>
        </>
    );
}

export default Location;