import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

import Banner from "../sections/banner"
import About from "../sections/about"
import Projects from "../sections/projects"

const IndexPage = () => (
  <Layout dark={true}>
    <SEO title="home" />
    <Banner />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
