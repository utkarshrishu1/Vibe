import React from "react";
import Navbar from "../navbar/navbar";
import Carousal from "../carousel/carousel";
import "./signup.css";

const Signup = ()=>{
    const signupForm = <form className="form">
        <div className="input-div">
            <label htmlFor="name">Full Name: </label>
            <input type="text" placeholder="John Dhillon" id="name" required/>
        </div>
        <div className="input-div">
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="johndhillon@gmail.com" id="email" required/>
        </div>
        <div className="input-div">
            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="John@$1" id="password" required/>
        </div>
        <button className="form-btn">SIGNUP</button>
    </form>
    return(
        <div className="layout">
            <Navbar/>
            <Carousal>
                {signupForm}
            </Carousal>
        </div>
    )
}
export default Signup;