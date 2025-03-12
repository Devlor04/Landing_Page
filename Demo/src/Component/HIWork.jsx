import React, { useState } from "react";
import { FaLock, FaChartLine, FaCoins, FaPiggyBank, FaHandHoldingUsd, FaRegMoneyBillAlt } from "react-icons/fa";
import "./HIWork.css";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("RDNT Lockers");

  return (
    <div className="container">
      <h1 className="title">How It Works</h1>
      <div className="button-group">
        <button
          className={`tab-button ${activeTab === "RDNT Lockers" ? "active" : ""}`}
          onClick={() => setActiveTab("RDNT Lockers")}
        >
          RDNT Lockers
        </button>
        <button
          className={`tab-button ${activeTab === "Lenders & Borrowers" ? "active" : ""}`}
          onClick={() => setActiveTab("Lenders & Borrowers")}
        >
          Lenders & Borrowers
        </button>
      </div>

      {/* Nội dung thay đổi theo tab */}
      {activeTab === "RDNT Lockers" ? (
        <div className="steps">
          <Step number="1" icon={<FaLock />} title="Lock $RDNT liquidity" description="Receive revenue from interest and flash loan fees" />
          <Step number="2" icon={<FaChartLine />} title="Access boosted emissions" description="Locked liquidity activates lending and borrowing RDNT emissions" />
          <Step number="3" icon={<FaCoins />} title="Accumulate tokens" description="Paid in blue chip assets such as BTC, ETH, BNB and stablecoins" />
        </div>
      ) : (
        <div className="steps">
          <Step number="1" icon={<FaPiggyBank />} title="Deposit collateral" description="Supply assets to borrow other tokens" />
          <Step number="2" icon={<FaHandHoldingUsd />} title="Borrow tokens" description="Use deposited assets as collateral for loans" />
          <Step number="3" icon={<FaRegMoneyBillAlt />} title="Repay and earn" description="Repay loans and gain rewards over time" />
        </div>
      )}
    </div>
  );
};

const Step = ({ number, icon, title, description }) => (
  <div className="step">
    <div className="step-number">{number}</div>
    <div className="step-icon">{icon}</div>
    <h2 className="step-title">{title}</h2>
    <p className="step-description">{description}</p>
  </div>
);

export default HowItWorks;
