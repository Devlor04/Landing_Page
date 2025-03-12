import "./MainContent.css";
import DImage from "../assets/D2.jpg"; 
import { AiOutlineStar, AiOutlineInfoCircle, AiOutlineArrowRight } from "react-icons/ai"; 


function MainContent() {
  return (
    <main className="main-content">
      {/* Background decorative elements */}
      <div className="star-bg star-bg-1">
        <AiOutlineStar size={24} />
      </div>
      <div className="star-bg star-bg-2">
        <AiOutlineStar size={24} />
      </div>
      <div className="star-bg star-bg-3">
        <AiOutlineStar size={24} />
      </div>

      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Earn Interest & Borrow Assets Cross-Chain, Seamlessly</h1>

            <a href="#" className="hero-button">
              Launch App <AiOutlineArrowRight size={16} />
            </a>

            <div className="powered-by">
              Powered by
              <img src={DImage} alt="Layer Zero" width={40} height={40} />
              Daniel 
            </div>
          </div>

          <div className="hero-image">
            <img src={DImage} alt="Minh họa Nền tảng Radiant" width={400} height={400} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-item">
            <div className="stat-label">
              <span>Total Market Size </span>
              <AiOutlineInfoCircle size={16} />
            </div>
            <div className="stat-value">$2.19M</div>
          </div>

          <div className="stat-item">
            <div className="stat-label">
              <span>Platform fees paid to RDNT lockers</span>
              <AiOutlineInfoCircle size={16} />
            </div>
            <div className="stat-value">$35.92M</div>
          </div>

          <div className="stat-item">
            <div className="stat-label">
              <span>Looping APR on ETH</span>
              <AiOutlineInfoCircle size={16} />
            </div>
            <div className="stat-value">~268%</div>
          </div>
        </section>

        {/* Crypto Section */}
       
      </div>
    </main>
  );
}

export default MainContent;
