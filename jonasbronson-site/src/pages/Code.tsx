import React from "react";

export default function Code(){
    return(
        <>
            <div style={{margin: "10%"}}>
                <h1 className="videoTitle"><span>Coding</span> Portfolio</h1>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Projects</h2>
                    <div style={{display: "flex"}}>
                        <div>
                            <h3 className="genH3">Project 1</h3>
                            <p className="genP">This is a description of project 1.</p>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div>
                            <h3 className="genH3">Project 2</h3>
                            <p className="genP">This is a description of project 2.</p>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Languages</h2>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Education</h2>
                    <div style={{display: "flex"}}>
                        <div style={{flexBasis: "50%"}}>
                            <h3 className="genH3">Completed</h3>
                            <ul>
                                <li className="genP codeList">Data Structures and Algorithms</li>
                                <li className="genP codeList">Object Oriented Design</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="genH3">In Progress</h3>
                            <ul>
                                <li className="genP codeList">Software Architecture and Design</li>
                                <li className="genP codeList">Database Systems</li>
                                <li className="genP codeList">Cryptography</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}