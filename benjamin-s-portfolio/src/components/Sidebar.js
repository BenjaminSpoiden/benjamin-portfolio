import React from "react"
import { navbarData } from "../constant/links"
import { renderLinks } from "../utils/renderLinks"

export const Sidebar = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>  
            <div className="sidebar-links" >
                <ol onClick={onClick} > 
                    {renderLinks(navbarData)}
                </ol>
                <div className="resume" style={{ display:"flex", marginRight:15, marginTop:25, justifyContent:"center", alignItems:"center"}} >
                    <a href="/benjamin_portfolio.pdf" className="resume-button">Resume</a>
                </div>
            </div>
            
        </div>
    )
}