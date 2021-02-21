import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login.js';
import Player from './Player.js'
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./DataLayer";




const spotify = new SpotifyWebApi();

function App() { 
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
 


    if (_token) {
        

        dispatch({
          type: "SET_TOKEN",
          token: _token

        })
        spotify.setAccessToken(_token);

        
        spotify.getMe().then((user) => {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        });
        
        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

        spotify.getFeaturedPlaylists().then((response) => {
          dispatch({
            type: "FEATURED_PLAYLISTS",
            featureds: response,
          })
        })

        spotify.getCategories().then((categories) => {
          dispatch({
            type: "GET_CATEGORIES",
            categories: categories,
          })
        })

        spotify.getNewReleases().then((releases) => {
          dispatch({
            type: "GET_RELEASES",
            releases: releases,
          })
        })
        
          spotify.getPlaylistTracks("37i9dQZF1DX1BGjF5N5O7F").then((track => {
          dispatch({
            type: "GET_TRACK",
            track: track,
          }) 
        })) 

        

    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> :  <Login />}
      </div>
  ); 
}

export default App;
