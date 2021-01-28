import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Project = (props) => {
    return (
        <div className="project">
                <div className="thumbnail">
                    <div className="duotone">
                        <Link to={"/" + props.slug}><Img fixed={props.duotone}/></Link>
                    </div> 
                    <div className="image">
                        <Link to={"/" + props.slug}><Img fixed={props.image}/></Link>
                    </div>
                </div>
                <div className={"content"}>
                        <h3>{props.title}</h3>
                        <span className="thin">{props.description}</span>
                </div>
        </div>  
    );
};

export default Project;