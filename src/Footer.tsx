import React from "react";

export default function Footer(){
    const [isMobile, setIsSmallScreen] = React.useState(window.innerWidth < 800);

    React.useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            <div className="footerContainer">
                {isMobile ? (
                    <>
                        <div className="footerContactContainer">
                            <a href="https://www.instagram.com/madeby_jonas"><p className="footerText footerLink">@madeby_jonas</p></a>
                            <a href="mailto:contact@jonasbronson.com"><p className="footerText footerLink">contact@jonasbronson.com</p></a>
                        </div>
                        <p className="footerText">All rights reserved.</p>
                    </>
                ) : (
                    <>
                        <a href="https://www.instagram.com/madeby_jonas"><p className="footerText footerLink">@madeby_jonas</p></a>
                        <p className="footerText">All rights reserved.</p>
                        <a href="mailto:contact@jonasbronson.com"><p className="footerText footerLink">contact@jonasbronson.com</p></a>
                    </>
                )}
            </div>
        </>
    );
}