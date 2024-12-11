import React from 'react'
import { NavLink } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div className="container2">
    <div className="login-box">
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-innovation-concept-with-ideas_23-2149153088.jpg"
          alt="Login Visual"
          className="login-image"
        />
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <input type="text" placeholder="Mobile Number" className="input-field" />
        <input type="text" placeholder="Name" className="input-field" />
        <NavLink to="/otp-verification" className="login-button">
        Login
      </NavLink>

        <p className="terms-text">
          By clicking this, you accept the{" "}
          <a href="#" className="terms-link">
            Terms and Conditions
          </a>.
        </p>
      </div>
    </div>
  
  </div>
   
  )
}

export default Login
