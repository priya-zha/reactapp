import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from '../Images/home.png';
import girlimg from '../Images/girl.jpg';
import '../Css/HomeAbout.css';
import Same from "./Same";
const Home = ()=>{

    return(
        <>
       <Same title="Learning made easy"
       text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi atque quae repellat deserunt consequuntur, placeat reprehenderit enim ratione aliquam corporis! Ad reiciendis quaerat eum nam eius voluptas, amet labore quod?"
       imgsrc={girlimg}
       btn="Read more"
       />
       
        </>
    );
}
export default Home;