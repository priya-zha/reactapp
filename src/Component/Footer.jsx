import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../Css/FooterStyle.css';
const Footer = ()=>{

    return(
        <>
       <footer>
            <div className="container container-flex">
                <div className="icons">
                <TwitterIcon className="icon"/>
                <FacebookIcon className="icon"/>
                <InstagramIcon className="icon"/>
                <LinkedInIcon className="icon"/>
                </div>
    
                <div className="copyright">
                    <p>All rights reserved</p>
                    <p>Made by Newzone Priya</p>                </div>
            </div>

       </footer>
       </>
    );
}
export default Footer;