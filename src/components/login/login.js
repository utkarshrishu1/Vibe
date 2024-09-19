import React from "react";
import Navbar from "../navbar/navbar";
import Carousal from "../carousel/carousel";
import "./login.css";
import {Link} from "react-router-dom"

const Login = ()=>{
    const loginForm = <form className="form">
        <div className="input-div">
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="johndhillon@gmail.com" id="email" required/>
        </div>
        <div className="input-div">
            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="John@$1" id="password" required/>
        </div>
        <button className="form-btn">LOGIN</button>
        <div>
            Don't have an account? <Link to="/signup">
            <span style={{color:"black", fontWeight:"bold"}}>Signup</span>
            </Link>
        </div>
    </form>
    return(
        <div className="layout">
            <Navbar/>
            <Carousal>
                {loginForm}
            </Carousal>
        </div>
    )
}
export default Login;