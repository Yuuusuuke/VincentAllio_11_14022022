import React from "react";
import data from "../ressources/logement.json";

export const dataContext = React.createContext();

export const DataProvider = ({children}) => {
    return(
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}