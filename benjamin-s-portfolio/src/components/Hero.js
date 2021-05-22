import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export const Hero = () => {
    return (
        <div className="hero-display">
            <div style={{transitionDelay: "100ms"}} >
                <h1>Hello, my name is</h1>
            </div>
            <div>
                <h2 className="big-heading">Benjamin Spoiden.</h2>
            </div>
            <div>
                <h3 className="big-heading">I am a Front-End Developer.</h3>
            </div>
            <div className="hero-p">
                <p>
                    I'm a Belgium based front-end software engineer who specializes in building and designing website and mobile apps.
                </p>
            </div>
            <div style={{ marginTop:"70px" }}>
                <a className="skills-link" onClick={() => scrollTo("#projects")}>See The Projects</a>
            </div>
        </div>
    )
}
