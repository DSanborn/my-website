// Layout.jsx
import './App.css'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Navbar />
      </header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">© 2026 My App</footer>
    </div>
  )
}
