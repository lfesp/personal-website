import React from 'react'

import Section from "../components/section"

const Banner = () => {

    return (
        <Section className="banner" dark={true}>
            <h1 className="subheading">Hi! I'm Liam Esparraguera.</h1>
            <div className="row"> 
                <div className="main-text thin">
                  <p>I'm a student at Princeton University pursuing a B.S.E. in Computer Science, as well as certificates (minors) in Music Composition, Statistics and Machine Learning, and Technology and Society.</p>
                  <p>Some of my key interests are web development, music composition, and product design, and my passion is combining aesthetics and functionality to create technologies that bring people together in meaningful ways.</p>
                </div>
                {/* <div className="main-image"><StaticImage src="" alt=""/></div> */}
            </div>
        </Section>
    );
};

export default Banner;