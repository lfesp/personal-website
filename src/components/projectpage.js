import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"
import SEO from "../components/seo"
import Section from "./section"
import "../styles/styles.scss"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const shortcodes = { Link } 

const ProjectPage = ({ data: { mdx } }) => {

  const isDark = mdx.frontmatter.dark ? "dark" : "light";
  
  return (
    <Layout dark={mdx.frontmatter.dark}>
      <SEO article={true} title={mdx.frontmatter.title} />
      <Section dark={mdx.frontmatter.dark}>
        <div className = {"project-page " + isDark}>        
          <GatsbyImage alt={mdx.frontmatter.image_alt_text} image={getImage(mdx.frontmatter.image)}/> 
        
          <h1 className="subheading">{"project: " + mdx.frontmatter.title}</h1>
   
     
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>

        </div>  
      </Section>
    </Layout>
  )
}

export default ProjectPage;

export const pageQuery = graphql`
  query ProjectPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        dark
        date
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
            )
          }
        }
        image_alt_text
      }
    }
  }
`