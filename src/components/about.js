import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 

import Section from "./section"

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
      <div className="light">
        <div className="container" id="about">
            <Section className="about"> 
              <div className="row"> 
                <h2 className="subheading">about me:</h2>
              </div>
              <div className="row"> 
                <div className="main-text thin">
                  <p>Born in Washington, D.C., I grew up in Montgomery County, Maryland and later, the city itself, in a Cuban-American household of my mother, grandmother, and myself.</p>
                  <p>From first grade, I attended the Maret School, an independent K-12 school in the District, where I first began to explore my passions for creative problem-solving and design.</p>
                  <p>During my time at Maret, I cultivated my loves for engineering and the arts in tandem, working on projects such as the design and construction of a wireless underwater ROV, and the development of a ray-tracing renderer for inhomogenous volumetric media.</p>
                </div>
              </div>
              <div className="main-image"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
              <div className="row"> 
                  <div className="main-text thin">
                      <p>Now, at Princeton, I've been spending my time building webapps with <a href="https://www.hoagie.io/" className="light">Hoagie.io</a>, performing in the <a href="https://www.princetonrocks.com/" className="light">Princeton University Rock Ensemble</a>, and developing my leadership skills as member of a <a href="https://scholarsoffinance.org/" className="light">nationwide organization</a> advocating for professional ethics.</p>
                  </div>
              </div>
            </Section>
        </div>
      </div>  
    );
};

export default About;