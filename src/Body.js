import React from 'react';
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import HomeHero from "./HomeHero";

function Body({ spotify }) {
    const [{ featureds, }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify = {spotify} />
            <HomeHero featureds = {featureds} /> 
        </div>
    )
}

export default Body
