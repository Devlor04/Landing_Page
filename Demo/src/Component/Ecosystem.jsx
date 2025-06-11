import "./Ecosystem.css"
import DImage from "../assets/D2.jpg"; 
import ChainImage from "../assets/Chainlink.jpg"
import StarImage from "../assets/Stargate.jpg"
import BinImage from "../assets/Binance.jpg"
const partners = [
  {
    name: "LayerZero",
    logo: DImage, // Replace with actual logo URL
    url: "https://chukydep.vn/Upload/post/chu-ky-chu-d.jpg",
  },
  {
    name: "Chainlink",
    logo: ChainImage, // Replace with actual logo URL
    url: "https://chain.link",
  },
  {
    name: "Stargate",
    logo: StarImage, // Replace with actual logo URL
    url: "https://stargate.finance",
  },
  {
    name: "Binance Labs",
    logo: BinImage, // Replace with actual logo URL
    url: "https://labs.binance.com",
  },
]

export default function Ecosystem() {
  return (
    <div className="ecosystem-wrapper">
      <div className="ecosystem-container">
        <h2 className="ecosystem-title">Our ecosystem:</h2>
        <div className="ecosystem-partners">
          {partners.map((partner, index) => (
            <a key={index} href={partner.url} className="partner-link" target="_blank" rel="noopener noreferrer">
              <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="partner-logo" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

