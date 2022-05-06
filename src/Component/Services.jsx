import React from "react";
import { NavLink } from "react-router-dom";
import homewimg from '../Images/girl.jpg';
import girlimg from '../Images/girl.jpg';
import '../Css/ServiceStyle.css';
import Data from "./Data";
import Card from './Card';

const Services = ()=>{

    return(
        <>
        <h1>Our Services</h1>
        <div className="services">
           {Data.map((values)=>{
               return(
                   <Card
                   Stitle={values.Stitle}
                   imgSource={values.imgsrc}
                   desc1={values.desc}
                   btnService={values.btnService}
                   />
               );
           })}

                  

        </div>
        
        
        </>
    );
}
export default Services;