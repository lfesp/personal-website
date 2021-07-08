import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const Project = (props) => {
    return (
    <Link to={"/" + props.slug}>
        <div className="project">
                <div className="thumbnail">
                    <div className="duotone">
                        <GatsbyImage image={props.duotone} alt={props.alt}/>
                    </div> 
                    <div className="image">
                        <GatsbyImage image={props.image} alt={props.alt} />
                    </div>
                </div>
                <article className="content">
                    <h3 className="hover-underline-animation">{props.title}</h3>
                    <p className="thin">{props.description}</p>
                </article>
        </div>
    </Link>  
    );
};

export default Project;