import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

const jobsQuery = graphql`
    {
        allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
            nodes {
                id
                company
                date
                position
                externalLink
                description {
                    id
                    name
                }
            }
        }
    }
`

export const WorkExperiences = () => {

    const { allStrapiJobs: { nodes } } = useStaticQuery(jobsQuery)
    const [ currentSelectedJob, setCurrentSelectedJob ] = useState(0)

    const { company, externalLink, date, position, description } = nodes[currentSelectedJob]  

    return (
        <>
            <h2 className="heading">Work Experience</h2>
            <div className="experience-display">
                <div className="job-list">
                    {
                        nodes.map((value, index) => ( 
                                <button 
                                    key={value.strapiId} 
                                    className={`job-list-element ${index === currentSelectedJob && "active"} `}
                                    
                                    onClick={() => setCurrentSelectedJob(index)}>
                                        {value.company}
                                </button>
                            ) 
                        )
                    }
                </div>
                <div className="job-display">
                    <div className="job-element">
                        <h3>
                            {position}
                        </h3>
                        <div>
                            <a className="job-button" href={externalLink} >{company}</a>
                        </div>
                        <p className="date">
                            {date}
                        </p>
                        <div>
                            <ul>
                                {
                                    description.map(value => (
                                        <li key={value.id} >
                                            {value.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}