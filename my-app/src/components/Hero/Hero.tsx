import { APP_CONFIG } from '@/constants/appConfig'
import './Hero.css'
import NeonButton from '@/components/UI/NeonButton'

export default function Hero() {
  return (
    <section className="hero">
      <h1>{APP_CONFIG.name}</h1>
      <p>Your project deserves a hacker with style — freelance software engineering made simple.</p>
      <NeonButton>Work With Me</NeonButton>
    </section>
  )
}
