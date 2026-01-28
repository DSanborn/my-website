// src/components/Hero/Hero.tsx
import './Hero.css'
import NeonButton from '@/components/UI/NeonButton'

interface HeroProps {
  title: string
  subtitle: string
  buttonText?: string
  buttonHref?: string
}

export default function Hero({ title, subtitle, buttonText, buttonHref }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && buttonHref && <NeonButton href={buttonHref}>{buttonText}</NeonButton>}
      </div>
    </section>
  )
}
