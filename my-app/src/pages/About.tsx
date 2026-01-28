// src/pages/About.tsx
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Hero/Hero'
import './About.css'

export default function About() {
  return (
    <Layout>
      <Hero
        title="About Me"
        subtitle="I'm a freelance software engineer who brings style, speed, and clean code to every project."
      />

      <section className="about-section">
        <div className="about-container">
          <h2>Who I Am</h2>
          <p>
            I specialize in building web and mobile applications that not only function flawlessly
            but look amazing. My focus is on creating projects that combine performance, aesthetics,
            and a touch of neon flair.
          </p>

          <h2>What I Do</h2>
          <p>
            From full-stack web development to UI/UX design and mobile apps, I handle projects
            end-to-end. I love crafting interfaces that are intuitive, responsive, and visually
            striking.
          </p>

          <h2>Why Work With Me</h2>
          <p>
            Clear communication, fast turnaround, and a hacker’s attention to detail. I make sure
            every project I deliver is polished, functional, and something you’ll be proud to show
            off.
          </p>
        </div>
      </section>
    </Layout>
  )
}
