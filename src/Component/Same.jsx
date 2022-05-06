import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from '../Images/home.png';
import girlimg from '../Images/girl.jpg';
import '../Css/HomeAbout.css';

const Same = (props)=>{

    return(
        <>
        <div className="mainSection">
            <div className="contentBox">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            <div className="btnBox">
                <div className="btn">
                <NavLink to="/about" className="readMore" >{props.btn}</NavLink>
                    
                </div>
            </div>
            </div>
            <div className="imgContainer">
                <img src={props.imgsrc} alt='home' className="imgName"/>
            </div>
        </div>
        </>
    );
}

export default Same;