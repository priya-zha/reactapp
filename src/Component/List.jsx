import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/logo1.png';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import '../Css/ListStyle.css';
const List = ()=>{
    // console.log(logo);
    return(
        <>
<header>
    <div className="container container-flex">
        <div className="logocontainer">
            <img src="{logo}" alt="logo" className="logo"/>
        </div>
        <nav>
            <div className="list">
                <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                <NavLink to="/services" className="listItem" activeClassName="activeItem">Services</NavLink>
                <NavLink to="/policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
                <NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
            
            
            
            </div>
        </nav>
        <div className="icons">
            <SearchIcon className="icon"/>
            <PersonIcon className="icon"/>
            <PhoneIcon className="icon"/>
            
        </div>
    </div>
</header>
   </>
    );
}
export default List;