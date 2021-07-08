import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout dark={true}>
    <SEO title="home" />
    <Banner />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
