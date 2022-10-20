import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css"
const Login = () => {
    return (
        <div className="logincontainer">
            <div className="messages">
                <div className="logo">Logo</div>
                <div>Enter your credentials to access your account</div>
                <div>
                    <input type="text" name="name" placeholder="User ID" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                    {/* <i className="fa-solid fa-eye"></i> */}
                </div>
                <div>
                    <button className="btn">Sign In</button>
                </div>
                <div>
                    <Link to="./signup" className="link">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Login;