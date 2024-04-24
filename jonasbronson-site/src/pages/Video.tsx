import React from "react"; 

export default function Video(){
    return(
        <>
            <div style={{margin: "10%"}}>
                <h1 className="videoTitle"><span>Video</span> Portfolio</h1>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Work</h2>
                </div>
                <div>
                    <h2 className="genH2">Accolades and Awards</h2>
                    <div style={{display: "flex"}}>
                        <div>
                            <h3 className="genH3 videoTwoTime"><span>Two Time</span> National Award Winner</h3>
                            <p className="genP">Two national awards, one school year. Awarded by the Journalism Education Association (JEA), 
                                these awards recognised excellence in videography and editing an already filmed video with 
                                specific requirements and time constraints. These were given out during the awards ceremony.
                            </p>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    );
}