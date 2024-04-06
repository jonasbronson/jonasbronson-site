import React from "react";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <div className="header">
                <Link to="" style={{height: "100%"}}><img src={Logo} alt="Jonas." className="headerLogo"></img></Link>
                <div className="headerLinksContainer">
                    <Link to="/Video" className="headerLinks">Video Portfolio</Link>
                    <Link to="/Code" className="headerLinks">Coding Portfolio</Link>
                </div>
            </div>
        </>
    );
}