import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Message sent!')
  }

  return (
    <div className="container contact-grid">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s work together</h2>
        <p className="body">Share a bit about your project or environment. I’ll reply with next steps quickly.</p>
        <div className="contact-cards">
          <div className="contact-card"><strong>Email</strong><span>you@example.com</span></div>
          <div className="contact-card"><strong>Location</strong><span>Remote / On-site</span></div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Full name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Message
          <textarea rows="4" name="message" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit" className="btn btn-primary">Send message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  )
}
