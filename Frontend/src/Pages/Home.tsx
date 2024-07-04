import React, { useState } from "react";
import "../Styles/Home.css";
import Sidebar from "./Sidebar";
import winkLogo from "../Assets/winklogopic.png";
import Logo from "../Assets/wink-transparent.png";
import { GiFlame } from "react-icons/gi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md"; 
import { IoMdNotificationsOutline } from "react-icons/io";


const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = ['Account', 'Settings', 'Payment', 'Logout'];

  return (
    <div className="home-container">
      <Sidebar menuItems={menuItems} isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="left-section">
        <div className="semi-nav">
          <div className="name1">
            <img src={winkLogo} alt="Wink logo" />
            <img
              src={Logo}
              alt="logo"
              style={{ maxWidth: "120px", height: "70px" }}
            />
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
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="container">
          <div className="top-nav">
            <div className="social-icons1">
              <a
                href="https://www.facebook.com/victor.maina.77312/"
                target="_blank"
                rel="noopener noreferrer">
                <GiFlame size={32} />
              </a>
              <a
                href="https://www.instagram.com/smigthereason/"
                target="_blank"
                rel="noopener noreferrer">
                <BiSolidMessageRounded  size={32} />
              </a>
              <a
                href="https://x.com/SmigDs"
                target="_blank"
                rel="noopener noreferrer">
                <IoMdNotificationsOutline  size={32} />
              </a>
              
              <button onClick={toggleSidebar} className="account-button">
                <MdAccountCircle size={32} />
              </button>
            </div>
          </div>
    
    <div className="grid">
      <div className="card1">
        <div className="card-image1">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Woman in white dress" />
        </div>
        <div className="card-overlay1"></div>
        <div className="card-content1">
        <h2>Searching for Your Soulmate</h2>

        </div>
      </div>
      <div className="card1">
        <div className="card-image1">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Woman in white dress" />
        </div>
        <div className="card-overlay1"></div>
        <div className="card-content1">
        <h2>Night Owl Adventures</h2>

        </div>
      </div>
      <div className="card1">
        <div className="card-image1">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Woman in white dress" />
        </div>
        <div className="card-overlay1"></div>
        <div className="card-content1">
        <h2>Discover People</h2>

        </div>
      </div>
      <div className="card1">
        <div className="card-image1">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Woman in white dress" />
        </div>
        <div className="card-overlay1"></div>
        <div className="card-content1">
        <h2>Thrill Seekers Unite</h2>

        </div>
      </div>
      <div className="card1">
        <div className="card-image1">
          <img src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Person wearing denim jacket" />
        </div>
        <div className="card-overlay1"></div>
        <div className="card-content1">
        <h2>Foodies Delight</h2>

        </div>
      </div>
      <div className="card1">
        <div className="card-image1">
          <img src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Person in white dress on beach" />
        </div>
        <div className="card-overlay1"></div>
        <div className="card-content1">
        <h2>Creative Souls</h2>

        </div>
      </div>
    </div>
   
  </div>
        <div className="tag">
          {/* <a href="/" rel="noopener noreferrer">
            <FaPowerOff size={32} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
