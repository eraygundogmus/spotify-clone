import React from 'react';
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer"

function Body({ spotify }) {
    const [{ featureds, }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify = {spotify} />
            

            {featureds?.playlists?.items.map((featured) => (
           
            <div id={featured.id}> <h3>{featured.name}</h3>{featured.description} <img src={featured.images[0].url}/>
            <p> {featured.tracks.href} </p>
            </div> 
            
            ))}
            
            
        </div>
    )
}

export default Body
