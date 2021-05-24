import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = () => {

    const { file } = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "me_photo.jpg"}) {
                childImageSharp {
                        gatsbyImageData
                    }
                }
        }
    `)


    
    const image = getImage(file)
    
    return (
        <>
            <h2 className="heading">About Me</h2>
            <div className="about-display" >
                <div>
                    <p>
                        Interested in new technologies and programming as well as problem solving, I decided to reorient myself in the software development industry because I believe that devices such as laptop and smartphones are occupying an increasingly important position in our lives. 
                        With a constant desire to learn, joining a company whose values are sharing and learning are the pillars of my professional project.
                    </p>
                    <p>
                        Here are a few technologies I've learned: 
                    </p>
                    <ul className="skill-list">
                        <li>
                            Javascript/Typescript
                        </li>
                        <li>
                            React/React Native
                        </li>
                        <li>
                            Gatsby
                        </li>
                        <li>
                            Strapi
                        </li>
                        <li>
                            Android
                        </li>
                        <li>
                            Node.JS
                        </li>
                        <li>
                            PostgreSQL
                        </li>
                        <li>
                            GraphQL
                        </li>
                        <li>
                            Firebase
                        </li>
                    </ul>
                </div>
            <div>
                <picture>
                    <GatsbyImage className="picture" image={image} alt="me" /> 
                </picture>
                </div>
            </div>
        </>
    )
}
export default About