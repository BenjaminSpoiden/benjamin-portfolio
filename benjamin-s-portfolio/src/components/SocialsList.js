import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiCodewars, SiHackerrank } from "react-icons/si"

export const SocialsList = ({ className }) => {
    return (
        <ul className={className}>
            <li>
                <a href="https://www.hackerrank.com/spoiden_benjamin">
                    <SiHackerrank />
                </a>
            </li>
            <li>
                <a href="https://www.codewars.com/users/BenjaminSpoiden" >
                    <SiCodewars />
                </a>
            </li>
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
    )
}