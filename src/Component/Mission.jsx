import React, { useState } from 'react';
import { FaProjectDiagram, FaExchangeAlt, FaLightbulb } from 'react-icons/fa'; // Import icons
import './Mission.css';

const missionContent = {
  unify: {
    text: "The Radiant DAO's mission is to unify the billions in fragmented liquidity across Web3 money markets under one safe, user-friendly, capital-efficient omnichain protocol.",
    highlight: "unify",
    icon: <FaProjectDiagram size={120} color="#8B5CF6" />
  },
  simplify: {
    text: "We simplify cross-chain DeFi by providing a unified interface for users to access multiple protocols and chains through a single platform.",
    highlight: "simplify",
    icon: <FaExchangeAlt size={120} color="#3B82F6" />
  },
  innovate: {
    text: "Through continuous innovation, we develop cutting-edge solutions that bridge the gaps between different blockchain networks and DeFi protocols.",
    highlight: "innovate",
    icon: <FaLightbulb size={120} color="#10B981" />
  }
};

export default function Mission() {
  const [activeTab, setActiveTab] = useState('unify');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() 
        ? <strong key={index}>{part}</strong>
        : part
    );
  };

  return (
    <div className="radiant-mission-wrapper">
      <div className="radiant-mission-container">
        <div className="radiant-mission-content">
          <h1 className="radiant-mission-title">Our Mission</h1>
          
          <div className="radiant-mission-tabs">
            {Object.keys(missionContent).map(tab => (
              <button
                key={tab}
                className={`radiant-tab-button ${activeTab === tab ? 'radiant-tab-active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="radiant-mission-box">
            <p className="radiant-mission-text">
              {renderText(
                missionContent[activeTab].text,
                missionContent[activeTab].highlight
              )}
            </p>

            {/* Hiển thị icon tương ứng với tab đang chọn */}
            <div className="radiant-chain-icon">
              {missionContent[activeTab].icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
