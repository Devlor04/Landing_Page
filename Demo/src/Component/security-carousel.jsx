"use client"

import React from "react"

import { useState } from "react"
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaCheckCircle,
  FaCode,
  FaBug,
  FaServer,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import "./security-carousel.css"

const securityPartners = [
  {
    id: 1,
    name: "Better Uptime",
    description:
      "24/7 on-call service coverage for Radiant’s ecosystem (status.radiant.capital uses this framework)",
    icon: FaShieldAlt,
  },
  {
    id: 2,
    name: "Blocksec",
    description:
      "BlockSec focuses on the security of the whole life cycle of smart contracts, specializing in rigorous testing of economic attacks",
    icon: FaLock,
  },
  {
    id: 3,
    name: "Peckshield",
    description:
      "Industry Leading Blockchain Security Company. PeckShield audited Radiant 1.0 & 2.0",
    icon: FaUserShield,
  },
  {
    id: 4,
    name: "Zokyo",
    description:
      "Zokyo takes an adversary-focused approached to identify complex vulnerabilities, protecting over $200B in digital assets globally",
    icon: FaCheckCircle,
  },
  {
    id: 5,
    name: "Open Zeppelin",
    description:
      "World-class smart contract monitoring software to respond in real-time to threats",
    icon: FaCode,
  },
  {
    id: 6,
    name: "Immunefi",
    description:
      "Web3's leading bug bounty platform, protecting $60 billion in user funds",
    icon: FaBug,
  },
  {
    id: 7,
    name: "Chaos Labs",
    description:
      "Supporting protocols with publicly available tooling to manage risk and better analyze protocol health.",
    icon: FaServer,
  },
]

export default function SecurityCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? securityPartners.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === securityPartners.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="security-container">
      <div className="security-grid">
        <div className="security-info">
          <h2 className="security-title">Trusted by 155,000+ holders</h2>
          <p className="security-description">
            Battle-tested and audited by multiple leading security firms. Radiant's security is of the highest priority.
          </p>
        </div>

        <div className="security-carousel">
          <div className="logo-container">
            <div className="logo-wrapper">
              {/* Background glow effect */}
              <div className="glow-effect"></div>

              {/* Partner logos */}
              <div className="logo-row">
                <div className="logo-circle small">
                  <FaShieldAlt className="logo-icon small" />
                </div>
                <div className="logo-circle large">
                  {securityPartners[activeIndex].icon &&
                    React.createElement(securityPartners[activeIndex].icon, { className: "logo-icon large" })}
                </div>
                <div className="logo-circle small">
                  <FaLock className="logo-icon small" />
                </div>
              </div>
            </div>
          </div>

          {/* Partner information */}
          <div className="partner-info">
            <h3 className="partner-name">{securityPartners[activeIndex].name}</h3>
            <p className="partner-description">{securityPartners[activeIndex].description}</p>
          </div>

          {/* Navigation controls */}
          <div className="carousel-controls">
            <button onClick={handlePrevious} className="nav-button" aria-label="Previous partner">
              <FaChevronLeft className="nav-icon" />
            </button>

            <div className="dot-indicators">
              {securityPartners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`dot-indicator ${activeIndex === index ? "active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="nav-button" aria-label="Next partner">
              <FaChevronRight className="nav-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

