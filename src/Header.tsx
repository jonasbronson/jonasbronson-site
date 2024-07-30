import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

    const [isNotPhone, setIsLargeScreen] = React.useState(window.innerWidth > 500);

    React.useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const bigVideo = "Video Portfolio";
    const smallVideo = "Video";
    const bigCode = "Coding Portfolio";
    const smallCode = "Code";

    return(
        <>
            <div className="headerContainer">
                <div className="header">
                    <Link to="" className="headerLogo" onClick={() => window.scrollTo(0, 0)}>Jonas<span>.</span></Link>
                    <div className="headerLinksContainer">
                        <Link to="/Video" className="headerLinks" onClick={() => window.scrollTo(0, 0)}>{isNotPhone ? bigVideo : smallVideo}</Link>
                        <Link to="/Code" className="headerLinks" onClick={() => window.scrollTo(0, 0)}>{isNotPhone ? bigCode : smallCode}</Link>
                    </div>
                </div>
            </div>
            
        </>
    );
}