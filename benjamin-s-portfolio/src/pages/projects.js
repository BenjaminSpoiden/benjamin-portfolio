import "../style/projects.scss"
import React from "react"
import { graphql } from "gatsby"
import { Table } from "../components/Table";
import { Layout } from "../components/Layout"
import { Socials } from "../components/Socials";
import { SEO } from "../components/SEO";

const Projects = ({ data }) => {

    if(typeof window !== 'undefined') {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
        }
    }

    const { allStrapiProjects: { nodes } } = data

    const headData = ["Year", "Title", "Company", "Technologies","Links"]
    return (
        <Layout>
            <SEO title="Projects" desc="Portfolio project made using Gatsby and Strapi"/>
            <Socials />
            <div id="content">
                <main id="main" className="main-content">
                    <h3>Projects</h3>
                    <p>Here's a list of all the projects I made.</p>
                    {nodes.length !== 0 
                        ? <Table tableHeadData={headData} tableBodyData={nodes} customClass="table-style" /> 
                        : <div className="table-placeholder" >
                            <p>Nothing to display yet...</p>
                        </div>
                    }
                </main>
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    allStrapiProjects(
      filter: {featured: {eq: false}}
      sort: {order: DESC, fields: year}
    ) {
      nodes {
        year
        title
        company
        stack {
          id
          technology
        }
        url
        github_url
      }
    }
  }
`

export default Projects