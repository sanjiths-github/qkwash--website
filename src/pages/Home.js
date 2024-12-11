import React, { useEffect, useState } from 'react'
import SideMenu from '../components/SideMenu'
import './Home.css'
import Header from '../components/Header';
import { FiCopy } from "react-icons/fi";


const Home = () => {
  const [isCompleted, setIsCompleted] = useState(false); // State to track when the animation completes
  const [isCircleVisible, setIsCircleVisible] = useState(true); // State to control circle visibility

  const copyToClipboard = () => {
    navigator.clipboard.writeText("abscx123");
    alert("Code copied to clipboard!");
  };

  useEffect(() => {
    // Set the text change and hide circle after animation completes
    const timer = setTimeout(() => {
      setIsCompleted(true);
      setIsCircleVisible(false); // Hide the circle after animation
    }, 2500); // Time matches the animation duration (2.5 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SideMenu />
 <Header/>
      
      <div className='Running-Job'>Running Job</div>
      <div className="container1">
        <div className="box">
          <div className="box-content">
            <div className="hub-details">
              <p className="hub-name">Hub Name</p>
              <p className="hub-subtext">Kerala Hostel, Kochi</p>
            </div>
            <div className="machine-details">
              <p className="machine-name">Machine Name</p>
              <p className="machine-subtext">#123456</p>
            </div>
            <div className="machine-details">
              <p className="machine-name">End Time</p>
              <p className="machine-subtext">10.30 am</p>
            </div>
          </div>

          <div className="progress-circle">
            <svg className="progress-ring" width="100" height="100">
              <circle
                className="progress-ring__background"
                cx="50"
                cy="50"
                r="45"
              ></circle>
              <circle
                className="progress-ring__circle"
                cx="50"
                cy="50"
                r="45"

              ></circle>
            </svg>
            <div className="progress-percentage">45%</div>
          </div>
        </div>

       <div className="box">
       <div className="box-content">
       <div className="hub-details">
         <p className="hub-name">Hub Name</p>
         <p className="hub-subtext">Hospital Kochi</p>
       </div>
       <div className="machine-details">
         <p className="machine-name">Machine Name</p>
         <p className="machine-subtext">#565989</p>
       </div>
       <div className="machine-details">
       <p className="machine-name">End Time</p>
       <p className="machine-subtext">11.00 pm</p>
     </div>
     </div>

    
     <div className="progress-circle">
     {isCircleVisible && (
       <svg className="progress-ring box2-circle" width="100" height="100">
         <circle
           className="progress-ring__background"
           cx="50"
           cy="50"
           r="45"
         ></circle>
         <circle
           className="progress-ring__circle"
           cx="50"
           cy="50"
           r="45"
         ></circle>
       </svg>
     )}
     <div className="progress-percentage">
     {isCompleted ? (
       <div className="error-circle">
         <span className="error-message">Stopped Due to Power Failure!!</span>
       </div>
     ) : (
       "26%"
     )}
     </div>
   </div>  

       </div>
      
       <div className="white-box">
       <div className="content">
         <h1 className="heading">Refer & Earn Points</h1>
         <p className="description">Refer Qk wash to your friends and get rewards</p>
         <div className="code-container">
           <p className="code">Copy your code: <span className="code-value">abscx123</span></p>
           <button className="copy-button" onClick={copyToClipboard}>
           <button className="copy-button" onClick={copyToClipboard}>
           <FiCopy size={20} />
         </button>
           </button>
         </div>
       </div>
       <div className="image-container">
       <img src="https://i0.wp.com/zapmoney.in/wp-content/uploads/2023/01/Group-783.png?fit=640%2C632&ssl=1" alt="Refer & Earn" className="right-image" />
     </div>
     </div>

      </div>


    </div>
  )
}

export default Home
