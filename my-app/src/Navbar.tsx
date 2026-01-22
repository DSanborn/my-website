// Navbar.jsx
import './App.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Byte Bomb</a>
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
