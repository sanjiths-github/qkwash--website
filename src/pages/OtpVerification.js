import React, { useState } from 'react'
import "./OtpVerification.css";
import { useNavigate } from "react-router-dom";



const OtpVerification = () => {
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();
  
    const handleVerify = () => {
      setIsVerified(true); 
  
   
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    };
  
    return (
        
      <div className="container">

        <div className="otp-box">
          {isVerified ? (
            <div className="verified-section">
              <div className="verified-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check-circle"
                >
                  <path d="M9 11l3 3L22 4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="verified-text">Verified</h3>
              <p>Redirecting to Main Page...</p>
            </div>
          ) : (
            <>
              <h2 className="otp-title">OTP Verification</h2>
              <img
                src="https://miro.medium.com/v2/resize:fit:1000/1*nXgod8eI9Gslpi4oCfsDew.jpeg"
                alt="OTP Illustration"
                className="otp-image"
              />
              <p className="otp-text">
                OTP has been sent to the registered mobile number ending with **023.
              </p>
              <div className="otp-inputs">
                <input type="text" maxLength="1" className="otp-input" />
                <input type="text" maxLength="1" className="otp-input" />
                <input type="text" maxLength="1" className="otp-input" />
                <input type="text" maxLength="1" className="otp-input" />
              </div>
              <button className="verify-button" onClick={handleVerify}>
                Verify
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default OtpVerification;