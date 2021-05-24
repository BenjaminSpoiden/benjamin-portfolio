import React, { useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { renderLinks } from "../utils/renderLinks"
import { navbarData } from "../constant/links"


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
                <nav className="nav">
                    <div className="logo">

                    </div>
                    <div className="nav-links">
                        <ol>
                            {renderLinks(navbarData)}
                        </ol>
                        <div className="resume">
                            <a href="/benjamin_portfolio.pdf" className="resume-button">Resume</a>
                        </div>
                    </div>
                    <div className="sidebar-icon">
                        <HiOutlineMenuAlt3 />
                    </div>
                </nav>
            </header>
        </>
    )
}

