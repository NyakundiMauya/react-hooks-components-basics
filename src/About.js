import React from "react";

function About(props){
    return (
        <aside>
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <p>{props.aboutText}</p>

        </aside>
    );
}

export default About;