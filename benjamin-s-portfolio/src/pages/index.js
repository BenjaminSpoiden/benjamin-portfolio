import "../style/styles.scss"
import React from "react"
import { graphql } from "gatsby"
import { Socials } from "../components/Socials"
import { Hero } from "../components/Hero"
import About from "../components/About"
import { WorkExperiences } from "../components/WorkExperiences"
import { Services } from "../components/Services"
import { Contact } from "../components/Contact"
import { Projects } from "../components/Projects"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const IndexPage = ({ data }) => {

  
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

  return (
    <Layout>
      <SEO desc="Portfolio project made using Gatsby and Strapi"/>
      <Socials />
      <div id="content">
        <main className="main-content">
          <section id="hero-display">
              <Hero />
          </section>
          <section id="about" style={{minHeight:"80vh"}} >
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects projects={nodes} title="Projects" showMore />
          </section>
          <section id="experience">
            <WorkExperiences />
          </section>
          <section id="contact" className="contact-display" >
            <Contact />
          </section>
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: {fields: image___created_at, order: DESC}) {
      nodes {
        id
        strapiId
        title
        url
        github_url
        desc
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(blurredOptions: {width: 10})
            }
          }
        }
        stack {
          id
          technology
        }
      }
    }
  }
`

export default IndexPage
