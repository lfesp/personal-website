import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Section from "../components/section"
import Project from "../components/project"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx (sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              slug
              description
              date(formatString: "MMMM DD, YYYY")
              thumbnail_alt_text
              thumbnail {
                childImageSharp {
                  normal:gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 50
                  )
                  duotone:gatsbyImageData( 
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 50
                    transformOptions: {
                      fit: COVER
                      duotone: {highlight: "#FFFAF0", shadow: "#1F2036"}
                    }
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMdx.edges.map( ({node}) => 
    <Project 
      key={node.frontmatter.title} 
      title={node.frontmatter.title} 
      description={node.frontmatter.description} 
      slug={node.frontmatter.slug} 
      image={node.frontmatter.thumbnail.childImageSharp.normal}
      duotone={node.frontmatter.thumbnail.childImageSharp.duotone}
      alt={node.frontmatter.thumbnail_alt_text}
    />);

  return (
    <Section className="projects" dark={true} id="projects">
      <h2 className="subheading">projects:</h2>
      <div className="row"> 
       {projects}
      </div>
    </Section>
  );
};

export default Projects;