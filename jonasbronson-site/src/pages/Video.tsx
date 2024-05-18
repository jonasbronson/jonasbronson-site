import React from "react";
import Accolades from "../assets/video/accolades.png";
import Wedding from "../assets/video/work-5.png";
import Highlight from "../assets/video/work-2.png";
import Contest from "../assets/video/work-3.png";

const centerStyle = { textAlign: 'center' };


export default function Video(){
    return(
        <>
            <div style={{margin: "10%"}}>
                <h1 className="videoTitle"><span>Video</span> Portfolio</h1>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Work</h2>
                    <div style={{display: "flex"}}>
                        <div className="videoWorkImageContainer videoWorkImage1">
                            <a href="https://youtu.be/0tVs0_6oVAw?si=aui6P3SJfdg6AGP-"><img src={Wedding} className="videoWorkImages" /></a>
                            <div className="videoWorkTextContainer">
                                <h4 className="genH4" style={{textAlign: 'center'}}>Wedding Film</h4>
                                <p className="genP" style={{textAlign: 'center'}}>My first wedding film made from scratch with most shots and editing by me.</p>
                            </div>
                        </div>
                        <div className="videoWorkImageContainer videoWorkImage2">
                            <a href="https://youtu.be/C_GCeATJakc?si=lx54H0HqpAmJDBeO"><img src={Highlight} className="videoWorkImages" /></a>
                            <div className="videoWorkTextContainer">
                                <h4 className="genH4" style={{textAlign: 'center'}}>Athletics Hype</h4>
                            </div>
                        </div>
                        <div className="videoWorkImageContainer videoWorkImage3">
                            <a href="https://youtu.be/qgE-RPuwqjo?si=nxBXy9G45r_Z0XeA"><img src={Contest} className="videoWorkImages" /></a>
                            <div className="videoWorkTextContainer">
                                <h4 className="genH4" style={{textAlign: 'center'}}>JEA Competition</h4>
                            </div>
                        </div>
                        <div>
                            <button className="videoWorkButton">SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="genH2">Accolades and Awards</h2>
                    <div style={{display: "flex"}}>
                        <div>
                            <h3 className="genH3 videoTwoTime"><span>Two Time</span> National Award Winner</h3>
                            <p className="genP videoAccoladesText">Two national awards, one school year. Awarded by the Journalism Education Association (JEA), 
                                these awards recognised excellence in videography and editing an already filmed video with 
                                specific requirements and time constraints. These were given out during the awards ceremony.
                            </p>
                            <h4 className="genH4 videoAccoladesHeaders">Videography Superior Award</h4>
                            <p className="genP videoAccoladesText">Videography is a category where the objective is to make a
                            video to tell a story using only video and natural sound. <br /><br /> Award given at JEA St. Louis 
                            Fall 2022 Convention. <br /><br /> Watch the video <a href="https://youtu.be/6Jm8AkyRKtM" className="videoAccoladesLink">here</a>.</p>
                            <h4 className="genH4 videoAccoladesHeaders">Video Package Editing Superior Award</h4>
                            <p className="genP videoAccoladesText">Video package editing has an editor edit a video with specific 
                            requirements, a folder of footage, and time constraints. <br /><br />Award given at JEA San Francisco 
                            Spring 2023 Convention. <br /><br />Watch the video <a href="https://youtu.be/qgE-RPuwqjo" className="videoAccoladesLink">here</a>.</p>
                        </div>
                        <img src={Accolades} className="videoAccoladesPic"/>
                        

                    </div>
                </div>
            </div>
        </>
    );
}