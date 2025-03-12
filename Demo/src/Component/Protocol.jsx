import { BsBoxSeam, BsArrowUpRight } from "react-icons/bs"
import { HiLink } from "react-icons/hi"
import { HiUsers } from "react-icons/hi2"
import "./Protocol.css"
const features = [
  {
    icon: BsBoxSeam,
    title: "Submit a proposal for review",
    description: "Discuss with community members and receive feedback",
    link: "Discourse",
  },
  {
    icon: HiLink,
    title: "On-chain governance",
    description: "Vote for active proposals. Your locked $RDNT liquidity is your voting power",
    link: "Snapshot",
  },
  {
    icon: HiUsers,
    title: "Community-driven",
    description: "Proposals that meet quorum and majority approval are implemented",
    link: "DeWork",
  },
]

export default function Protocol() {
  return (
    <div className="protocol-wrapper">
      <div className="protocol-container">
        <div className="protocol-header">
          <h1>
            A Fully-Decentralized,
            <br />
            Community-Governed Protocol
          </h1>
          <p>Own Radiant's future</p>
        </div>

        <div className="protocol-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#" className="feature-link">
                {feature.link}
                <BsArrowUpRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

