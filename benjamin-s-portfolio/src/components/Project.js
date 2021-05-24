import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BiLink } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"

export const Project = ({ project, index }) => {

    const { title, desc, image, url, github_url, stack } = project
    const staticImage = getImage(image.localFile)

    return (
        <div className="parent">
            <div className="project-content">
                <div className="project-featured">
                    <p>Highlighted</p>
                </div>
                <h3 className="project-heading">{title}</h3>
                <div className="project-desc">
                    <p>
                        {desc}
                    </p>
                </div>
                <ul className="project-stack-list">
                    {
                        stack.map((stack, index) => {
                            return (
                                <li key={index * 4} >
                                    {stack.technology}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="project-links">
                    {url && <a href={url}> <BiLink /> </a>}
                    {github_url && <a href={github_url}> <FaGithub /> </a>}
                </div>
            </div>
            <div className="project-image">
                <GatsbyImage image={staticImage} alt="project-pic" />
            </div>
        </div>
    )
}