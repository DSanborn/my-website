// Layout.jsx
import type { ReactNode } from 'react'
import './Layout.css'
import '@/css/Animations.css'
import Navbar from '@/components/Navbar/Navbar'
import Logo from '@/components/UI/Logo'
import { APP_CONFIG } from '@/constants/appConfig'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          <Navbar />
        </div>
      </header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">© 2026 {APP_CONFIG.company}</footer>
    </div>
  )
}
