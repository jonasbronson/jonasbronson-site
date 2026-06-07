import React from "react";
import SmoothImage from "../components/SmoothImage";
import Accolades from "../assets/video/accolades.png";
import AccoladesPhone from "../assets/video/accoladesPhone.png";
import Wedding from "../assets/video/work-5.png";
import Highlight from "../assets/video/work-2.png";
import Contest from "../assets/video/work-3.png";

export default function Video(){

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


    return(
        <>
            <div className="genMargins">
                <h1 className="videoTitle"><span>Video</span> Portfolio</h1>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Work</h2>
                    <div className="videoWorkDiv">
                        <div className="videoWorkImageContainer">
                            <a href="https://youtu.be/0tVs0_6oVAw?si=aui6P3SJfdg6AGP-"><SmoothImage src={Wedding} className="videoWorkImages" ratio={1500 / 2245} alt="Wedding Film" />
                            <div className="videoWorkTextContainer">
                                <h4 className="genH4 videoWorkText" >Wedding Film</h4>
                                <p className="genP videoWorkText" >My first wedding film made from scratch with most shots and editing by me.</p>
                            </div>
                            </a>
                        </div>
                        <div className="videoWorkImageContainer">
                            <a href="https://youtu.be/C_GCeATJakc?si=lx54H0HqpAmJDBeO"><SmoothImage src={Highlight} className="videoWorkImages" ratio={1500 / 2245} alt="Athletics Hype" />
                            <div className="videoWorkTextContainer">
                                <h4 className="genH4 videoWorkText" >Athletics Hype</h4>
                                <p className="genP videoWorkText" >Hype video made for Shawnee Mission Northwest High School.</p>
                            </div>
                            </a>
                        </div>
                        <div className="videoWorkImageContainer">
                            <a href="https://youtu.be/qgE-RPuwqjo?si=nxBXy9G45r_Z0XeA"><SmoothImage src={Contest} className="videoWorkImages" ratio={1500 / 2245} alt="JEA Competition" />
                            <div className="videoWorkTextContainer">
                                <h4 className="genH4 videoWorkText" >JEA Competition</h4>
                                <p className="genP videoWorkText" >Edit that won a superior medal at JEA San Francisco 2023.</p>
                            </div>
                            </a>
                        </div>
                        <div className="videoWorkButtonContainer">
                            <a href="https://www.youtube.com/playlist?list=PLswGkvnLPAr22CnjC8q2IrWl151eo1vux"><button className="videoWorkButton">SEE MORE</button></a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="genH2">Accolades and Awards</h2>
                    <div className="videoAccoladesDiv">
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
                        <SmoothImage
                            src={isLargeScreen ? Accolades : AccoladesPhone}
                            className="videoAccoladesPic"
                            ratio={isLargeScreen ? 1500 / 2245 : 1}
                            alt="Award accolades"
                        />
                        

                    </div>
                </div>
            </div>
        </>
    );
}