import React from 'react'
import { useDataLayerValue } from "./DataLayer";
import "./HomeHero.css"
import ReactAudioPlayer from 'react-audio-player';


function HomeHero() {
    const strShorter = function truncate(short, n){
        return short?.length > n ? short.substr(0, n-1) + "..." : short;
    }
    
    const [{ featureds, categories, releases, track}, dispatch] = useDataLayerValue();
 
    return (
    <div className="home-hero">
        <h2 className="featureds-title">Editor's picks</h2>
{/*         <ReactAudioPlayer 
            src={track.items[19].track.preview_url}
            autoPlay
            controls/> */}
            <div className="featureds"> 
                {featureds?.playlists?.items.slice(2,10).map((featured) => (
                <div className="featureds-items" id={featured.id}> <img src={featured.images[0].url}/>
                <h3>{strShorter(featured.name, 20)}</h3>
                <h4> {strShorter(featured.description,37)} </h4>
                </div> 
                ))}
            </div>
            <h2 className="featureds-title">Categories</h2>
            <div className="featureds">
                {categories?.categories?.items.slice(0,7).map((category) => (
                <div className="featureds-items" id={category.id}> <img src={category.icons[0].url}/>
                <p> {}</p>
                <h3>{strShorter(category.name, 20)}</h3>
                <h4> {strShorter(category.description,37)} </h4>
                {/*    <p> {featured.tracks.href} </p> */}</div> ))}
            </div>
            <h2 className="featureds-title">New Releases</h2>
            <div className="featureds">
                {releases?.albums?.items.slice(0,8).map((featured) => (
                <div className="featureds-items" id={featured.id}> <img src={featured.images[0].url}/>
                <h3>{strShorter(featured.name, 20)}</h3>
                <h4> {strShorter(featured.description,37)} </h4>
                {/*    <p> {featured.tracks.href} </p> */}</div> ))}
            </div>
    </div>

    )}

export default HomeHero
