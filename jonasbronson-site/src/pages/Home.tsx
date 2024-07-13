import React from "react";
import { Link } from "react-router-dom";
import { animated } from '@react-spring/web'
import ProfileNature from "../assets/profileNature.jpg";
import ProfileNaturePhone from "../assets/profileNaturePhone.png";
import CodePic from "../assets/code.png";

export default function Home(){

    const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1000);

    React.useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div style={{ margin: "10%" }}>
                <div className="homeFront">
                    <h1 className="homeTitle">Hi, I'm <span>Jonas</span>.</h1>
                    <h3 className="homeSubTitle">Computer Science/Cybersecurity Student<br /><br />Video Producer</h3>
                </div>
                <div style={{ marginBottom: "15%" }}>
                    <h2 className="homeSpecialHeader">I Specialize In</h2>
                    <h3 className="homeSpecialList">Software Development <br />
                        Web Development <br />
                        Graphic Design <br />
                        Video Editing <br />
                        Videography <br />
                        <span>and so on...</span></h3>
                </div>
                <div style={{ marginBottom: "15%" }}>
                    <h2 className="homeHeader" style={{ marginBottom: "1em" }}>My Portfolios</h2>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="button" className="homeButton" style={{ marginRight: "3em" }}><Link to="/Video">Video</Link></button>
                        <button type="button" className="homeButton"><Link to="/Code">Code</Link></button>
                    </div>
                </div>
                <div style={{ marginBottom: "15%" }}>
                    <h2 className="homeHeader">About Me</h2>
                    <div className="homeAboutDiv">
                        <img src={isLargeScreen ? ProfileNature : ProfileNaturePhone} className="homeAboutPic" />
                        <p className="homeAboutText">Hi, I'm Jonas Bronson, a college student majoring in computer science and cybersecurity at Kansas State
                            University. I've always had a dual passion in both video production and anything computer related since
                            my middle school years. <br /> <br />

                            I took my first video production course at Shawnee Mission Northwest high school (SMNW) in 2019. During
                            my years there, I completed all of the video production courses and became an Executive Producer for the
                            advanced video production class' video program, KUGR. While in KUGR, I directed and produced videos, ran
                            productions, live-streamed, and did jobs for the school district. In addition, I also do my own work for
                            clients and personal projects. My video production work has won national awards in 2022 and 2023 from the
                            Journalism Education Association (JEA). I currently work for Wildcat Watch at Kansas State University as
                            a Student Organization Video Producer where I manage others, film and edit videos. <br /><br />

                            I have an extensive background in computer programming, cybersecurity, game design, and graphic design.
                            During my years in high school, I completed all of the computer science courses offered. Moreover, I took
                            classes at the Shawnee Mission School District Center for Academic Achievement for both cybersecurity and
                            game design. I have designed websites including my mom's and the one you are looking at right now!
                            Currently, I am working through the Kansas State University curriculum for the Computer Science +
                            Cybersecurity Bachelor's degree.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="homeHeader">Contact Me</h2>
                    <p className="homeContactText">I'd love to hear from you. Contact me with questions, possible opportunities, or anything inbetween.</p>
                </div>
                <div>

                </div>
            </div>

        </>
    );
}