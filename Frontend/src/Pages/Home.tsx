import React from "react";
import "../Styles/Home.css";
import winkLogo from "../Assets/winklogopic.png";
import Logo from "../Assets/wink-transparent.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPowerOff,
} from "react-icons/fa";
import { Container, Typography, Box, Button } from "@mui/material";

import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="right-section">
        <div className="name1">
          <img src={winkLogo} alt="Wink logo" />
          <img
            src={Logo}
            alt="logo"
            style={{ maxWidth: "120px", height: "70px" }}
          />
        </div>

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
        </div>

        <div className="content">
          <div className="content1">
            <h1>Welcome to Wink</h1>
            <p>Your journey to find true love starts here.</p>
            <section className="feature-section">
              <h2>Why Choose Us?</h2>
              <div className="features">
                <div className="feature">
                  <h3>Personalized Matches</h3>
                  <p>
                    We use advanced algorithms to connect you with compatible
                    partners.
                  </p>
                </div>
                <div className="feature">
                  <h3>Secure and Private</h3>
                  <p>Your privacy and security are our top priority.</p>
                </div>
                <div className="feature">
                  <h3>Easy to Use</h3>
                  <p>Our platform is user-friendly and easy to navigate.</p>
                </div>
              </div>
            </section>

            {/* <section className="cta-section">
              <h2>Get Started</h2>
              <p>
                Join thousands of others in finding their perfect match. Sign up
                now and start your journey to finding love!
              </p>
              <button className="cta-button">Sign Up</button>
            </section> */}

          </div>
        </div>
      </div>

      <div className="left-section">
        <div className="tag">
          <a href="/" rel="noopener noreferrer">
            <FaPowerOff size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
