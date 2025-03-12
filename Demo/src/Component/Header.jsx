import "./Header.css";
import { FaStar, FaGithub, FaTwitter, FaTelegramPlane, FaMoon } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="logo">
            <FaStar />
            <span>RADIANT</span>
          </a>

          <nav className="nav-links">
            <a href="#" className="nav-link">Governance</a>
            <a href="#" className="nav-link">Security</a>
            <a href="#" className="nav-link">Documentation</a>
          </nav>
        </div>

        <div className="header-right">
          <a href="#" className="social-link"><FaGithub /></a>
          <a href="#" className="social-link"><FaTwitter /></a>
          <a href="#" className="social-link"><FaTelegramPlane /></a>

          <a href="#" className="launch-app-button">
            Launch App <FiArrowRight />
          </a>

          <button className="theme-toggle">
            <FaMoon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
