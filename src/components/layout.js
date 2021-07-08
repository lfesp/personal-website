/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"

// for smooth scrolling anchor tags
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ dark, children }) => {

  const isDark = dark ? " dark" : "";
  
  return (
    <div className={"layout" + isDark}>
      <Header dark={dark}/>
      <main>{children}</main>
      <Footer dark={dark}/>
    </div>
  )
}

/*
Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Layout