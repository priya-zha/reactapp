import React from "react";
import Same from "./Same";
import logo from '../Images/logo.jpg';

const About = ()=>{

    return(
        <>
        <Same title="Know More About US"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque quae repellat deserunt consequuntur, placeat reprehenderit enim ratione aliquam corporis! Ad reiciendis quaerat eum nam eius voluptas, amet labore quod?"
        imgsrc={logo}
        btn='Know more'
        />
        </>
    );
}
export default About;