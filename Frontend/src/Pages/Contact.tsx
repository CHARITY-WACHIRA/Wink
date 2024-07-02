import React from "react";
import "../Styles/Contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPowerOff,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="contact-container">
      <div className="right-section">
      <div 
                className="scrollable-container"
                style={{
                  height: 'auto',
                  overflowY: 'auto',
                  padding: '10px'
                }}
              >
        <div className="name1">
          <h2>Stephy</h2>
        </div>
        <div className="top-nav">
          <div className="social-icons1">
            <a
              href="https://www.facebook.com/victor.maina.77312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/smigthereason/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/SmigDs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-maina-389318301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:victor.dmaina@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={24} />
            </a>
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div
          className="contact_block"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="0"
        >
          <div className="contact_line">
            <div className="line"></div>
            <span className="section_subtitle">contact</span>
            <div className="line2"></div>
          </div>
          <div className="section_block">
            <h2 className="section_title">
              Let's get in touch and embark on new endeavours!
            </h2>
            {/* <div className="card-container">
              <div className="card">
                <h3>Card 1</h3>
                <p>Content for card 1</p>
              </div>
              <div className="card">
                <h3>Card 2</h3>
                <p>Content for card 2</p>
              </div>
              <div className="card">
                <h3>Card 3</h3>
                <p>Content for card 3</p>
              </div>
            </div> */}
     <div className="container">
    
  <div className="grid">
    <div className="card">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Woman in white dress" />
      </div>
      <div className="card-overlay"></div>
      <div className="card-content">
        <h1>Beauty</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button>See More</button>
      </div>
    </div>
    <div className="card">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Person wearing denim jacket" />
      </div>
      <div className="card-overlay"></div>
      <div className="card-content">
        <h1>Beyond Builder</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button>See More</button>
      </div>
    </div>
    <div className="card">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Person in white dress on beach" />
      </div>
      <div className="card-overlay"></div>
      <div className="card-content">
        <h1>Shooting Star</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button>See More</button>
      </div>
    </div>
  </div>
 
</div>
          </div>
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

export default Contact;
