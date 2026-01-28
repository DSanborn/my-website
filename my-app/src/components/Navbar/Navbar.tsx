// Navbar.jsx
import { useState } from 'react'
import './Navbar.css'
import './NavButton.css'
import { APP_CONFIG } from '@/constants/appConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">{APP_CONFIG.name}</a>
        </li>

        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li className="nav-item dropdown">
          {/* toggle button */}
          <button
            className="dropdown-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            Projects
          </button>

          {/* dropdown */}
          <ul className={`dropdown-menu ${open ? 'open' : ''}`}>
            <li>
              <a href="/web">ABCs</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
