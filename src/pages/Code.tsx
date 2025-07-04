import React from "react";
import JS from "../assets/code/js.png";
import CSharp from "../assets/code/cSharp.png";
import CPlusPlus from "../assets/code/cPlusPlus.png";
import FF from "../assets/code/fortunefinances.png";
//import GoalHorizontal from "../assets/code/goalkeeper-land.png"

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
                            <h3 className="genH3">The Note Distillery</h3>
                            <p className="genP">A website co-developed with some friends of mine for the HackKU 2025 Hackathon. Built in 36 hours, this website brings note
                                organization with the power of a built-in AI assistant powered by Google Gemini. The AI assistant can make flashcards, summarize notes, and
                                answer questions about notes. Using the power of Gemini also allows for scanning handwritten notes and converting them to text. This project was
                                built with React.js, Next.js, Google Cloud, and Firebase. The project was deployed with Vercel and is hosted at
                                <a href="https://notedistillery.com" style={{textDecoration: "none", color: "#3879cf"}}> notedistillery.com</a>.
                            </p>
                        </div>
                    </div>
                    <div className="codeProjectsContainer">
                        <div className="codeProjectsTextContainer">
                            <h3 className="genH3">Fortune Finances</h3>
                            <div className="codeProjectsImageContainer">
                                <p className="genP">Fortune Finances is a website with an AI fortune cookie that gives (not so good) financial advice. It was developed for the
                                    Hack K-State 2024 hackathon and won the <strong>Best Beginner Track</strong> award for being the best hack done by first-time hackathon attendees.
                                    The frontend was made with Next.js and React, with Next.js being a new framework me and my team had never worked with before.
                                    We used Auth0 for authentication, OpenAI's GPT4o-mini model and API for the AI, and Firebase to store user history.
                                    The project was deployed with Vercel and is hosted at <a href="https://fortunefinances.biz" style={{textDecoration: "none", color: "#3879cf"}}>fortunefinances.biz</a>.
                                    You can check out the source code <a href="https://github.com/ThisisJackRyan/FortuneFinances" style={{textDecoration: "none", color: "#3879cf"}}>here</a>.
                                </p>
                                <div>
                                    <a href="https://fortunefinances.biz"><img src={FF} className="codeProjectsImages"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="codeProjectsContainer">
                        <div className="codeProjectsTextContainer">
                            <h3 className="genH3">jonasbronson.com</h3>
                            <p className="genP">My website you're viewing right now built from the ground up
                                using React.js and Vite. My design skills and my passion to learn helped bring
                                everything together for this website that shows off my accomplishments. You can view
                                the source code <a href="https://github.com/jonasbronson/jonasbronson-site/tree/main" style={{textDecoration: "none", color: "#3879cf"}}>here</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Experience</h2>
                    <div className="codeExperienceDiv">
                        <h3 className="genH3">Teaching Assistant</h3>
                        <h4 className="">January 2025 - Current</h4>
                        <p className="genP">
                            A teaching assistant position for the CIS 400 Object Oriented Programming class at Kansas State University.
                            In this position I help grade student assignments and also hold office hours to help students better understand
                            material and help on assignments.
                        </p>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Languages</h2>
                    <div className="codeLanguagesDiv">
                        <div>
                            <img className="codeLanguages" src={JS}/>
                            <h4 className="genP codeMainLanguages">{isLargeScreen ? bigJava : smallJava}</h4>
                        </div>
                        <div>
                            <img className="codeLanguages" src={CPlusPlus}/>
                            <h4 className="genP codeMainLanguages">C++</h4>
                        </div>
                        <div style={{marginRight: "0"}}>
                            <img className="codeLanguages" src={CSharp}/>
                            <h4 className="genP codeMainLanguages">C#</h4>
                        </div>
                    </div>
                    <div>
                        <h3 className="genH3">Plus some experience in:</h3>
                        <ul style={{translate: "-37px"}}>
                            <li className="genH4 codeList">Python</li>
                            <li className="genH4 codeList">HTML + CSS</li>
                            <li className="genH4 codeList">Java</li>
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