import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Sidebar() {
    const [{ playlists } ,dispatch ] = useDataLayerValue()

    return (

        <div className="sidebar">
            <img className="sidebar__logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="Logo"
                /> 
            <SidebarOption  Icon={HomeIcon}  title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <strong className="playlist__title"> PLAYLISTS </strong>
            <SidebarOption Icon={LibraryAddIcon} title="Create Playlist"/>
            <SidebarOption Icon={FavoriteIcon} title="Tracks you liked"/>
            <hr />
            
            {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name}/> 
            
            ))}

        </div>
    )
}

export default Sidebar
