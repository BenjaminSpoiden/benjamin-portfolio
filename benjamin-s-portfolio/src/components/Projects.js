import { Link } from "gatsby"
import React from "react"
import { Project } from "./Project"


export const Projects = ({ projects, title, showMore }) => {

    return (
        <>
            <h2 className="heading"> {title}</h2>
            <div className="ul-project">
                <ul>
                    {
                        projects.map((project, index) => (
                                <li className="project-list">
                                    <Project key={project.id} index={index} project={project} />
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
            <div className="btn">
                {showMore && <button className="see-more-btn">See More</button>}
            </div>
        </>
    )
}