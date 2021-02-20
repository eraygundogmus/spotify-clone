import React from 'react'
import { useDataLayerValue } from "./DataLayer";
import "./HomeHero.css"


function HomeHero() {
    const sth = (str) => {}
    const strShorter = function truncate(short, n){
        /* console.log(short);
        const pattern = new RegExp('(.*)<a href=".*">(.*)<\/a>(.*)', 'g')
        console.log(short.match("a"));
        short = short.match(pattern) ? short.match(pattern).splice(1, 3).join("") : short;
        console.log(short); */
        return short?.length > n ? short.substr(0, n-1) + "..." : short;
    }
    const [{ featureds, categories, releases }, dispatch] = useDataLayerValue();
    console.log('releases', releases)

    return (
    <div className="home-hero">
        <h2 className="featureds-title">{featureds.message}</h2>
            <div className="featureds"> 
                {featureds?.playlists?.items.slice(0,8).map((featured) => (
                <div className="featureds-items" id={featured.id}> <img src={featured.images[0].url}/>
                <h3>{strShorter(featured.name, 20)}</h3>
                <h4> {strShorter(featured.description,37)} </h4>
                {/*    <p> {featured.tracks.href} </p> */}</div> ))}
            </div>
            <h2 className="featureds-title">Categories</h2>
            <div className="featureds">
                {categories?.categories?.items.slice(0,7).map((featured) => (
                <div className="featureds-items" id={featured.id}> <img src={featured.icons[0].url}/>
                <h3>{strShorter(featured.name, 20)}</h3>
                <h4> {strShorter(featured.description,37)} </h4>
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
