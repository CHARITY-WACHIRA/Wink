import React, { useState, useEffect } from 'react';
import "../Styles/Login.css";
import Logo from "../Assets/wink-transparent.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPowerOff
} from "react-icons/fa";

const Login: React.FC = () => {
  const [, setActiveCard] = useState<'login' | 'signup'>('login');
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const selectCard = (card: 'login' | 'signup') => {
    setActiveCard(card);
    if (card === 'signup') {
      setShowSignup(true);
    }
  };

  const closeSignup = () => {
    setShowSignup(false);
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

      {showSignup && (
        <div className="signup-modal" data-aos="fade-in">
          <div className="signup-content">
            <button className="close-button" onClick={closeSignup}><FaPowerOff size={28} /></button>
            <h2>Sign Up</h2>
            <form>
              <div className="input-container">
                <label htmlFor="new-username"></label>
                <input type="text" id="new-username" placeholder='username' name="new-username" required />
              </div>

              <div className="input-container">
                <label htmlFor="new-email"></label>
                <input type="email" id="new-email" placeholder='email@gmail.com' name="new-email" required />
              </div>

              <div className="input-container">
                <label htmlFor="new-password"></label>
                <input type="password" id="new-password" placeholder="password" name="new-password" required />
              </div>

              <div className="input-container">
                <label htmlFor="confirm-password"></label>
                <input type="password" id="confirm-password" placeholder='confirm-password' name="confirm-password" required />
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
