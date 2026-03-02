import LogoSVG from '@/assets/icon.svg'
import './Logo.css'

export default function Logo() {
  return (
    <span role="img" aria-label="Logo">
      <LogoSVG className="logo neon-logo" />
    </span>
  )
}