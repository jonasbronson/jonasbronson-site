import React from "react";
import JS from "../assets/code/js.png";
import CSharp from "../assets/code/cSharp.png";
import Vue from "../assets/code/vue.png";

export default function Code(){

    const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 600);

    React.useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


const smallJava="JS";
const bigJava="JavaScript";

    return(
        <>
            <div className="genMargins">
                <h1 className="videoTitle"><span>Coding</span> Portfolio</h1>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Projects</h2>
                    <div className="codeProjectsContainer">
                        <div className="codeProjectsTextContainer">
                            <h3 className="genH3">Git Polish</h3>
                                <p className="genP"> A website and CLI tool created to help programmers create readme files for their GitHub
                                    repositories quickly and easily for the HackCats 2025 Hackathon. The application utilizes Gemini AI and Google Cloud Platform
                                    to perform analysis on repositories to create accurate readme files fast. The app can also create descriptions for repositories
                                    as well as a checklist to make it look more professional. It was created with React.js, Next.js, Firebase Auth, and Google Cloud Platform.
                                    The project was deployed with Vercel and is hosted <a href="https://git-polish.vercel.app/" style={{textDecoration: "none", color: "#3879cf"}}>here</a>.
                                </p>
                        </div>
                    </div>
                    <div className="codeProjectsContainer">
                        <div className="codeProjectsTextContainer">
                            <h3 className="genH3">The Note Distillery</h3>
                            <p className="genP">A website co-developed with some friends of mine for the HackKU 2025 Hackathon. Built in 36 hours, this website brings note
                                organization with the power of a built-in AI assistant powered by Google Gemini. The AI assistant can make flashcards, summarize notes, and
                                answer questions about notes. Using the power of Gemini also allows for scanning handwritten notes and converting them to text. This project was
                                built with React.js, Next.js, Google Cloud, and Firebase. The project was deployed with Vercel and is hosted at
                                <a href="https://notedistillery.com" style={{textDecoration: "none", color: "#3879cf"}}> notedistillery.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Experience</h2>
                    <div className="codeExperienceDiv">
                        <h3 className="genH3">Software Development Intern</h3>
                        <h4>May 2025 - August 2025 <br /> NorthPoint Development | Kansas City, MO</h4>
                        <p className="genP">
                            In this role I worked on both internal and external tools. Notably, I shipped new features into production, 
                            made UI more accessible and user-friendly, improved the company's security stance, and helped streamline processes 
                            that were previously mundane and time consuming.
                        </p>
                    </div>
                    <div className="codeExperienceDiv">
                        <h3 className="genH3">Teaching Assistant</h3>
                        <h4>January 2025 - Current <br /> Kansas State University | Manhattan, KS</h4>
                        <p className="genP">
                            A teaching assistant position for the CIS 400 Object Oriented Programming class at Kansas State University.
                            In this position I help grade student assignments and also hold office hours to help students better understand
                            material and help on assignments.
                        </p>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Languages and Technologies</h2>
                    <div className="codeLanguagesDiv">
                        <div>
                            <img className="codeLanguages" src={JS}/>
                            <h4 className="genP codeMainLanguages">{isLargeScreen ? bigJava : smallJava}</h4>
                        </div>
                        <div>
                            <img className="codeLanguages" src={Vue}/>
                            <h4 className="genP codeMainLanguages">Vue</h4>
                        </div>
                        <div style={{marginRight: "0"}}>
                            <img className="codeLanguages" src={CSharp}/>
                            <h4 className="genP codeMainLanguages">C#</h4>
                        </div>
                    </div>
                    <div>
                        <h3 className="genH3">Plus some recent experience in:</h3>
                        <ul style={{translate: "-37px"}}>
                            <li className="genH4 codeList">Google Cloud Platform</li>
                            <li className="genH4 codeList">HTML + CSS</li>
                            <li className="genH4 codeList">React.js</li>
                            <li className="genH4 codeList">React Native</li>
                            <li className="genH4 codeList">SQL</li>
                            <li className="genH4 codeList">C</li>
                        </ul>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Education</h2>
                    <div className="codeEducationDiv">
                        <div className="codeTimelineDiv">
                            <div className="codeTimelineDot codeComplete"/>
                            <div className="codeTimelineLine codeComplete"/>
                            <div className="codeTimelineDot codeComplete"/>
                            <div className="codeTimelineLine  codeComplete"/>
                            <div className="codeTimelineDot codeComplete"/>
                            <div className="codeTimelineLine codeTimelineLineHalf codeComplete"/>
                            <div className="codeTimelineLine codeTimelineLineHalf"/>
                            <div className="codeTimelineDot"/>
                            <div className="codeTimelineLine"/>
                            <div className="codeTimelineDot"/>
                        </div>
                        <div className="codeEducationTextDiv">
                            <div>
                                <h3 className="genH3">Completed</h3>
                                <ul style={{translate: "-37px"}}>
                                    <li className="genP codeList">Data Structures and Algorithms</li>
                                    <li className="genP codeList">Logical Foundations of Programming</li>
                                    <li className="genP codeList">Object Oriented Design</li>
                                    <li className="genP codeList">Database Systems</li>
                                    <li className="genP codeList">C Language Lab</li>
                                    <li className="genP codeList">Software Architecture and Design</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="genH3">In Progress</h3>
                                <ul style={{translate: "-37px"}}>
                                    <li className="genP codeList">Programming Languages</li>
                                    <li className="genP codeList">Computer Architecture and Operations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
