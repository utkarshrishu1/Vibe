import React from "react";
import "./navbar.css"
import logo from "../../images/logo.jpg"

const Navbar = (props) =>{
    return(
        <div className="navbar">
            <div className="logo" style={{backgroundImage: `url(${logo})`, backgroundSize: "100% 100%"}}></div>
            {props.children}
        </div>
    )
}
export default Navbar;