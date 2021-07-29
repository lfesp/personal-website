import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Section from "../components/section"

const About = () => {
  return (
    <Section className="about" dark={false} id="about"> 
      <h2 className="subheading">about me:</h2>
      <div className="row"> 
        <div className="main-text thin">
          <p>Born in Washington, D.C., I grew up in Montgomery County, Maryland and later, the city itself, in a proud Cuban-American household. From first grade through senior year, I attended the Maret School, an independent K-12 school in the District, where I first began to explore my passions for creative problem-solving and design.</p>
          <p>Since then, I have cultivated my loves for engineering and the arts in tandem, working on projects such as the design and construction of wireless underwater ROVs, the development of a ray-tracing renderer for inhomogeneous volumetric media, and the website you’re on right now.</p>
        </div>
      </div>
      <div className="main-image"><div className="image-wrapper">
        <StaticImage src="../images/dc_panorama.jpeg" alt="panorama of Tidal Basin" quality={80} placeholder="blurred" />
        </div></div>
      <div className="row"> 
        <div className="main-text thin">
          <p>Now, at Princeton University, I'm pursuing my interests in and out of the classroom by directing the development of an integrated application platform for students with <a href="https://www.hoagie.io/" className="light" target="_blank" rel="noreferrer">hoagie.io</a>, helping direct the <a href="https://dn.businesstoday.org/" className="light" target="_blank" rel="noreferrer">nation's first and only all-expenses-paid design conference for undergraduate creatives</a>, performing in the <a href="https://www.princetonrocks.com/" className="light" target="_blank" rel="noreferrer">Princeton University Rock Ensemble</a>, and developing my leadership skills as a member of a <a href="https://scholarsoffinance.org/" className="light" target="_blank" rel="noreferrer">nationwide organization advocating for professional ethics</a>.</p>
          <p>This summer, as I prepare to return to Princeton for my sophomore year, I’m working as co-founder and lead developer of a <a href="https://kellercenter.princeton.edu/people/startups-teams/berry" className="light" target="_blank" rel="noreferrer">Keller Center-sponsored startup venture</a> to build a Google Chrome extension that will facilitate online grocery shopping for those with diabetes and other nutrition-reliant medical conditions.</p>
          <p>Oh, and I also DJ for <a href="https://www.wprb.com/" target="_blank" className="light" rel="noreferrer">WPRB 103.3 FM</a> &#8212; come check out the show :)</p>
        </div>
      </div>
    </Section>
  );
};

export default About;