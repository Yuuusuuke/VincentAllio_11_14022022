import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import Dropdown from "../Dropdown/dropdown";
import Tag from "../Tag/tag";
import Note from "../Note/note";
import Carousel from "../Carousel/carousel";
import "./location.scss";

function Location(){
    const {id} = useParams()
    const data = useContext(dataContext);
    const location = data.find(element => element.id === id);

    const nameHost = location.host.name.split(" ");

    return(
        <>
            <Carousel pictures={location.pictures} />
            <section className="location">
                <header className="location__header">
                    <div className="location__header__title">
                        <h1 className="location__header__title__name">{location.title}</h1>
                        <h2 className="location__header__title__place">{location.location}</h2>
                        <div className="location__header__title__tagsTable">
                            {location.tags.map((element, key) => (<Tag key={key} name={element} />))}
                        </div>
                    </div>
                    <div className="location__header__details">
                        <div className="location__header__host">
                            <p className="location__header__host__name">{nameHost.reduce((result, item) => (`${result}\n${item}`))}</p> {/** Cut name to add a line break between **/}
                            <img className="location__header__host__picture" src={location.host.picture} alt="host" />
                        </div>
                        <Note value={location.rating} />
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