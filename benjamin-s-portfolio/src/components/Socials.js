import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Socials = () => {
    return (
        <>
            <div id="left" className="socials-pos-left">
                <ul className="social-list">
                    <li>
                        <a href="https://github.com/BenjaminSpoiden" >
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/benjamin-spoiden-372528195/" >
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
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