import React, { useState } from 'react';
import "../Styles/Login.css";

const Login: React.FC = () => {
  const [activeCard, setActiveCard] = useState<'login' | 'signup'>('login');

  const selectCard = (card: 'login' | 'signup') => {
    setActiveCard(card);
  };

  return (
    <div className="login-container">
      <div className="card-container">
        <div 
          className={`card ${activeCard === 'login' ? 'active' : 'inactive'}`}
          onClick={() => selectCard('login')}
        >
          <h2>Log In</h2>
          <form>
            <label htmlFor="username">Username or Email</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Log In</button>
          </form>
        </div>
        <div 
          className={`card ${activeCard === 'signup' ? 'active' : 'inactive'}`}
          onClick={() => selectCard('signup')}
        >
          <h2>Sign Up</h2>
          {/* Your sign-up form goes here */}
        </div>
      </div>
    </div>
  );
};

export default Login;
