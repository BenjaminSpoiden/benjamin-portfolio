import React from "react"
import { SocialsList } from "./SocialsList"

export const Socials = ({animate}) => {
    return (
        <>
            <div id="left" className={`socials-pos-left ${animate}`}>
                <SocialsList className="social-list" />
            </div>
            <div id="right" className={`socials-pos-right ${animate}`}>
                <div className="email-style">
                    <a href="tel:+32499319323">+32 499 31 93 23</a>
                    <a href="mailto:spoiden.benjamin@gmail.com" >spoiden.benjamin@gmail.com</a>
                </div>
            </div>
        </>
    )
}