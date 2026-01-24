// Navbar.jsx
import './Navbar.css'
import { APP_CONFIG } from '@/constants/appConfig'


export default function Navbar() {
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
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
