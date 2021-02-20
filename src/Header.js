import React from 'react';
import "./Header.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer"
function Header() {
    const [{ user } , dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <NavigateBeforeIcon fontSize="medium" />
                <NavigateNextIcon fontSize="medium" />
                <div className="search">
                <SearchIcon />
                <input
                    placeholder="Search for artists, Songs, or Podcasts"
                    type="text" 
                /> </div>

            </div>
            <div className="header__right">
                <Avatar fontSize="large" src={user?.images[0].url} alt={user?.display_name}/>
                <h4> {user?.display_name} </h4>
                

            </div>

            
        </div>
    )
}

export default Header
