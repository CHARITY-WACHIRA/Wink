import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Loading.css";
import winkLogo from "../Assets/winklogopic.png";
import Logo from "../Assets/wink-transparent.png";

const Loading: React.FC = () => {
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          navigate('/login'); // Redirect to login page after 10 seconds
          return 100;
        }
        return oldProgress + 1;
      });
    }, 50); // Increase progress by 1% every 100ms

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <img src={winkLogo} alt="Loading" className="loading-image" />
        <img
            src={Logo}
            alt="logo"
            style={{ maxWidth: "350px", height: "250px" }}
          />

        {/* <p className="loading-text">Loading, please wait...</p> */}
        <div className="loading-bar">
          <div className="loading-bar-progress" style={{ width: `${loadingProgress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;