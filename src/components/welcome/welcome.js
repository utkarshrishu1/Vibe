import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./welcome.css";
import Carousal from "../carousel/carousel";

const welcome = () => {
    return (
        <div className="layout"> 
            <Navbar>
            <div className="link-wrapper">
            <Link to='/login' ><button className="button login-button">LOGIN</button></Link>
            <Link to='/signup'><button className="button signup-button">SIGNUP</button></Link>
            </div>
            </Navbar>
            <Carousal>
                <div className="headings">
                    <h1 style={{fontSize:"40px"}}>Let Vibe Play the Perfect Track</h1>
                    <h3 style={{fontSize:"24px"}}>No more searching—just say it, and Vibe will play it. Seamless music control, powered by your voice.</h3>
                </div>
            </Carousal>
        </div>
    )
}

export default welcome