import React, { useEffect, useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export const Navbar = () => {

    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)

    const setDropShadow = () => {
        if(window.scrollY >= 80) {
            setIsNavbarScrolled(true)
        } else {
            setIsNavbarScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", setDropShadow)
        return () => {
            window.removeEventListener("scroll", setDropShadow)
        }
    }, [])

    

    return (
        <>
            <header id="navbar" className={isNavbarScrolled ? "nav-header scroll" : "nav-header"}>
                <nav className="nav" >
                    <div className="logo">
                    </div>
                    <div className="nav-links" >
                        <ol>
                            <li>
                                <a onClick={() => scrollTo("#about")}>About</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo("#services")} >What I do</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo("#projects")} >Projects</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo("#experience")}>Work Experience</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo("#contact")} >Contact</a>
                            </li>
                        </ol>
                        <div className="resume">
                            <button className="resume-button">Resume</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

