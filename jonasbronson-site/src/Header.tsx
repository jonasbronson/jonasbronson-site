import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className="header">
                    <Link to="" className="headerLogo">Jonas<span>.</span></Link>
                    <div className="headerLinksContainer">
                        <Link to="/Video" className="headerLinks">Video Portfolio</Link>
                        <Link to="/Code" className="headerLinks">Coding Portfolio</Link>
                    </div>
                </div>
            </div>
            
        </>
    );
}