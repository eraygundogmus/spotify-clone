import React from 'react';
import "./Body.css";
import Header from "./Header"

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify = {spotify} />
            <h1> I am body </h1>
            
        </div>
    )
}

export default Body
