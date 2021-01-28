import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 

import Section from "./section"
import Project from "./project"

const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          duotone: fixed(
              width: 284, height: 284,
              duotone: { highlight: "#FFFaF0", shadow: "#1F2036"}
          ) {
          ...GatsbyImageSharpFixed
          }
          image: fixed(width: 280, height: 280) {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    return (
      <div className="dark">
        <div className="container" id="projects">
            <Section className="projects">
                <div className="row"> 
                    <h2 className="subheading">projects:</h2>
                </div>
                <div className="row"> 
                  <Project title='personal website' description="this personal site. created during the Princeton arrival quarantine using Gatsby framework for React, and deployed on Netlify." slug="" image={data.placeholderImage.childImageSharp.image} duotone={data.placeholderImage.childImageSharp.duotone} />
                  <Project title='healthy helper (?)' description='here is my description of the project 2, which will hopefully be developing the "Healthy Helper" browser extension for Google Chrome.' slug="404" image={data.placeholderImage.childImageSharp.image} duotone={data.placeholderImage.childImageSharp.duotone} />
                  <Project title='TigerMag.com' description="a new website for Princeton's oldest humor magazine, developed by Hoagie.io over the course of the 2020-2021 school year." slug="" image={data.placeholderImage.childImageSharp.image} duotone={data.placeholderImage.childImageSharp.duotone} />
                </div>
            </Section>
        </div>
      </div>  
    );
};

export default Projects;