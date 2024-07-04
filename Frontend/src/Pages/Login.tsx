import React, { useState, useEffect } from 'react';
import "../Styles/Login.css";
import Logo from "../Assets/wink-transparent.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login: React.FC = () => {
  const [activeCard, setActiveCard] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const selectCard = (card: 'login' | 'signup') => {
    setActiveCard(card);
  };

  return (
    <div className="login-container" data-aos="slide-left">
      <div className="left-section1">
      <img
            src={Logo}
            alt="logo"
            style={{ maxWidth: "350px", height: "250px" }}
          />
      </div>
      <div className="right-section1" data-aos="fade-up">
        <div className="form-container">
          <h2>Log In</h2>
          <form>
            <div className="input-container">
              <label htmlFor="username">Username or Email</label>
              <input type="text" id="username" name="username" required />
            </div>

            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <button type="submit">Log In</button>
          </form>
        </div>
      
        <div className="contact_line">
            <div className="line"></div>
            <span className="section_subtitle">Or</span>
            <div className="line2"></div>
          </div>
        
        <div className="acc-section">
          <h4>Don't have an account? Join us today!</h4>
          <button 
            className="option-button"
            onClick={() => selectCard('signup')}
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
