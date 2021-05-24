import "../style/styles.scss"
import "aos/dist/aos.css"
import React, { useEffect } from "react"
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
import Aos from "aos"

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
  
  useEffect(() => {
    console.log("test")
    Aos.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
  }, [])

  const { allStrapiProjects: { nodes } } = data

  return (
    <Layout animate="animate">
      <SEO desc="Portfolio project made using Gatsby and Strapi"/>
      <Socials animate="animate"/>
      <div id="content">
        <main id="main" className="main-content">
          <section id="hero-display">
              <Hero />
          </section>
          <section id="about" data-aos="fade-up" style={{minHeight:"80vh"}}>
            <About />
          </section>
          <section id="services" data-aos="fade-up" >
            <Services />
          </section>
          <section id="projects" data-aos="fade-up" >
            <Projects projects={nodes} title="Projects" showMore />
          </section>
          <section id="experience" data-aos="fade-up" >
            <WorkExperiences />
          </section>
          <section id="contact" className="contact-display" data-aos="fade-up" >
            <Contact />
          </section>
        </main>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: {fields: image___created_at, order: DESC}, filter: {featured: {eq: true}}) {
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
