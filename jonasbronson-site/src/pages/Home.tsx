import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <div style={{margin: "4em"}}>
                <div className="homeFront">
                    <h1 className="homeTitle">Hi, I'm <span>Jonas</span>.</h1>
                    <h3 className="homeSubTitle">Computer Science/Cybersecurity Student<br></br>Hobbyist Videographer/Video Editor</h3>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="homeSpecialHeader">I Specialize In</h2>
                    <h3 className="homeSpecialList">Software Development <br/>
                        Web Development <br/>
                        Graphic Design <br/> 
                        Video Editing <br/>
                        Videography <br/>
                        <span>and so on...</span></h3>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="homePortfolio">See my portfolios</h2>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button type="button" className="button" style={{marginRight: "1em"}}><Link to="/Code">Coding</Link></button>
                        <button type="button" className="button"><Link to="/Video">Video</Link></button>
                    </div>
                    <h2 className="homePortfolio">... or scroll to find out more about me</h2>
                </div>
                    
            </div>
            

        </>
    );
}