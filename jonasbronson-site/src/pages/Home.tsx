import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button type="button" className="button" style={{marginRight: "1em"}}><Link to="/Code">Coding</Link></button>
                <button type="button" className="button"><Link to="/Video">Video</Link></button>
            </div>
            

        </>
    );
}