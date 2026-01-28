// src/pages/Contact.tsx
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Hero/Hero'
import NeonButton from '@/components/UI/NeonButton'
import './Contact.css' // import the CSS

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO handle form submission here (e.g., API call)
    console.log({ name, email, message })
    // reset form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Layout>
      <Hero
        title="Get in Touch"
        subtitle="Have a project, idea, or just want to say hi? Let's connect!"
      />

      <section className="contact-form-section">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
              />
            </div>

            <NeonButton type="submit">Send Message</NeonButton>

            {submitted && <p className="success-message">Thank you! Your message was sent.</p>}
          </form>
        </div>
      </section>
    </Layout>
  )
}
