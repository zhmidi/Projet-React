import React from "react";
import { useLocation } from "react-router-dom";

const Watch = () => {

    const location = useLocation()
    console.log(location)

    return(
    <div>
        <h3 className="wa">{location.state.title}</h3>
        <img className="wb" src={location.state.Image}></img>
        <p className="wc">{location.state.description}</p>
    </div>
    )
}



export default Watch;