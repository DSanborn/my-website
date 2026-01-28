// src/pages/Home.tsx
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'

export default function Home() {
  return (
    <Layout>
      <Hero
        title="Building The Future, One Line at a Time"
        subtitle="Your project deserves a hacker with style — freelance software engineering made simple."
        buttonText="Work With Me"
        buttonHref="#contact"
      />
      <Features />
    </Layout>
  )
}
