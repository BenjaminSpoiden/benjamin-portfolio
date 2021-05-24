import React, { memo, useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { renderLinks } from "../utils/renderLinks"
import { navbarData } from "../constant/links"
import { Sidebar } from "./Sidebar"
import { Link } from "gatsby"

export const Navbar = memo(({ animate }) => {

    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

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

    const handleClick = () => {
        setShowSidebar(!showSidebar)
        if(!showSidebar) {
            document.getElementById("main").style.filter = "blur(5px)"
        }else {
            document.getElementById("main").style.filter = null
        }
    } 

    
    return (
        <>
            <Sidebar className={showSidebar ? 'sidebar active' : 'sidebar'} onClick={() => handleClick()} />
            <header id="navbar" className={isNavbarScrolled ? "nav-header scroll" : `nav-header`}>
                <nav className={`nav ${animate}`}>
                    <div className="logo">
                        <Link to="/" > <p>B.</p> </Link>
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
                        <HiOutlineMenuAlt3 onClick={() => handleClick()} />
                    </div>
                </nav>
            </header>
        </>
    )
})

