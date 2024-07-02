import React from "react";
import "../Styles/About.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPowerOff,

} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
// import Tag from "../components/Tag";


const About: React.FC = () => {
  return (
    <div className="home-container"> {/* Added a container class for styling */}
      <div className="right-section"> {/* Reversed: Left to Right */}
      <div className="name"><h2>Victor</h2></div>
        <div className="top-nav">
          <div className="social-icons1">

            <a
              href="https://www.facebook.com/victor.maina.77312/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/smigthereason/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>

            <a
              href="https://x.com/SmigDs"
              target="_blank"
              rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/victor-maina-389318301/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:victor.dmaina@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <MdEmail size={24} />
            </a>
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>

      </div>
      <div className="left-section">
        {/* Placeholder for content that was originally in the left section */}
        <div className="tag">
        <a
              href="/"
              rel="noopener noreferrer">
              <FaPowerOff size={32} />
            </a>
          
        </div>
        
      </div>
    </div>
  );
};

export default About;
