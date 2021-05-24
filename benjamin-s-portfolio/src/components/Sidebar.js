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
            </div>
        </div>
    )
}