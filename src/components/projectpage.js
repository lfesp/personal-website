import React from "react"

import Layout from "./layout"
import SEO from "../components/seo"
import Section from "./section"
import "../styles/styles.scss"
import "../styles/projectpage.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectPage = ({ children, pageContext }) => {

  console.log(pageContext.frontmatter.image);
  const featuredImage = getImage(pageContext.frontmatter.image);
  
  return (
    <Layout dark={pageContext.frontmatter.dark}>
      <SEO article={true} title={pageContext.frontmatter.title} />
      <Section dark={pageContext.frontmatter.dark}>
        <h1 className="subheading">{pageContext.frontmatter.title}</h1>
        <div className="row">
          <GatsbyImage image={featuredImage}/>
        </div>
        <div className="row"> 
          <div className="main-text">
            {children}
          </div>
        </div> 
      </Section>
    </Layout>
  )
}

export default ProjectPage;

// export const pageQuery = graphql`
// query MDXQuery($slug: String!) {
//   mdx(slug: { eq: $slug }) {
//     frontmatter {
//         slug
//         title
//     }
//   }
// }`

// export const query = graphql`
//   query ProjectQuery($slug: String) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         slug
//       }
//     }
//   }
// `