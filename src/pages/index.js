import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => (
  <div className="layout">
    <Header />
    <Banner />
    <About />
    <Projects />
    <Footer />
  </div>
)

export default IndexPage
