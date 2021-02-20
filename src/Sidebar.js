import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
    const [{ playlists }, dispatch ] = useDataLayerValue()
    return (

        <div className="sidebar">
            <img className="sidebar__logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="Logo"
                /> 
            <SidebarOption title="Home"/>

            {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name}/> 
            
            ))}

        </div>
    )
}

export default Sidebar
