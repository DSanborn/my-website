import { useState } from 'react'
import './Alien.css'

export default function AlienCrawl() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`alien ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* You can replace this with your own alien PNG or SVG */}
      <img src="/alien.png" alt="Alien" />
    </div>
  )
}
