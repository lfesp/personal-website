import React from 'react';

const Section = (props) => {
    const isDark = props.dark ? "dark" : "light";

    return (
        <div className = {isDark}>
            <div className = "container" id={props.id}>
                <div className={"section " + props.className}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Section;