import React from "react";

export default function Home(){

    const primary = "#3879cf";

    const baseButton: React.CSSProperties = {
        border: "none",
        borderRadius: 36,
        padding: "20px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
        gap: 12
    };

    const leftButtonStyle: React.CSSProperties = {
        ...baseButton,
        background: primary,
        color: "#fff",
        fontSize: 28,
        height: "100%",
        width: "100%",
        borderRadius: 42
    };

    const aboutStyle: React.CSSProperties = {
        ...baseButton,
        background: "#ffffff",
        color: "#111",
        fontSize: 16,
        borderRadius: 28,
        flex: 1
    };

    const videoStyle: React.CSSProperties = {
        ...baseButton,
        background: "#2b2b2b",
        color: "#fff",
        fontSize: 16,
        borderRadius: 28,
        flex: 1
    };

    const contactStyle: React.CSSProperties = {
        ...baseButton,
        background: "#f5e06b",
        color: "#111",
        fontSize: 16,
        borderRadius: 36,
        flex: 1.6
    };

    return (
        <div style={{position: "fixed", inset: 0, background: "#181717", color: "#fff", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center"}}>

            <header style={{paddingTop: 36, paddingBottom: 12, textAlign: "center"}}>
                <h1 style={{margin: 0, fontSize: "clamp(28px, 6vw, 56px)", fontWeight: 700, lineHeight: 1}}>
                    Hi. I'm <span style={{color: primary}}>Jonas</span>
                </h1>
            </header>

            <main style={{width: "94%", flex: 1, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, alignItems: "stretch", paddingBottom: 36}}>

                <button aria-label="Projects" style={leftButtonStyle}>
                    Projects
                </button>

                <div style={{display: "flex", flexDirection: "column", gap: 20}}>
                    <button aria-label="About me" style={aboutStyle}>About me</button>
                    <button aria-label="Videography" style={videoStyle}>Videography</button>
                    <button aria-label="Contact me" style={contactStyle}>Contact me</button>
                </div>

            </main>

        </div>
    );
}