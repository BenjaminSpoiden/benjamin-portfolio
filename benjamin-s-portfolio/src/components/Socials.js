import React from "react"
import { SocialsList } from "./SocialsList"

export const Socials = () => {
    return (
        <>
            <div id="left" className="socials-pos-left">
                <SocialsList className="social-list" />
            </div>
            <div id="right" className="socials-pos-right">
                <div className="email-style">
                    <a href="tel:+32499319323">+32 499 31 93 23</a>
                    <a href="mailto:spoiden.benjamin@gmail.com" >spoiden.benjamin@gmail.com</a>
                </div>
            </div>
        </>
    )
}