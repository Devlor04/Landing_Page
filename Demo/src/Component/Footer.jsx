import React from 'react';
import { FaDiscord, FaTwitter, FaTelegram, FaYoutube, FaStar } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <FaStar />
          <span>RADIANT</span>
        </div>
        
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-section">
              <h3>Documentation</h3>
              <p>Learn more about Radiant</p>
            </div>
            <div className="footer-section">
              <h3>Security</h3>
              <p>Immunefi bug bounty</p>
            </div>
            <div className="footer-section">
              <h3>Press Kit</h3>
              <p>Logo and brand assets</p>
            </div>
          </div>
          
          <div className="footer-column">
            <div className="footer-section">
              <h3>Careers</h3>
              <p>We're hiring! 🎨</p>
            </div>
            <div className="footer-section">
              <h3>Snapshots ↗</h3>
              <p>Vote on live proposals</p>
            </div>
            <div className="footer-section">
              <h3>Analytics</h3>
              <p>Dune dashboard</p>
            </div>
          </div>
          
          <div className="footer-column">
            <div className="footer-section">
              <h3>Discourse</h3>
              <p>Discuss governance proposals</p>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <p>Disclaimer and terms</p>
            </div>
            <div className="footer-section">
              <h3>Radiant Rundown</h3>
              <p>Monthly newsletter</p>
            </div>
          </div>
          
          <div className="footer-column social-column">
            <div className="social-link">
              <div className="social-icon"><FaDiscord /></div>
              <div className="social-text">
                <h3>Discord</h3>
                <p>Join our community</p>
              </div>
            </div>
            <div className="social-link">
              <div className="social-icon"><FaTwitter /></div>
              <div className="social-text">
                <h3>Twitter</h3>
                <p>Stay informed</p>
              </div>
            </div>
            <div className="social-link">
              <div className="social-icon"><FaTelegram /></div>
              <div className="social-text">
                <h3>Telegram</h3>
                <p>Price and news updates</p>
              </div>
            </div>
            <div className="social-link">
              <div className="social-icon"><FaYoutube /></div>
              <div className="social-text">
                <h3>YouTube</h3>
                <p>Subscribe for tutorials</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          Copyright© 2025 - Daniel. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;