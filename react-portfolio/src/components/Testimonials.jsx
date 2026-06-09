import React from 'react'

const testimonials = [
  { quote: 'Delivered a secure, scalable cloud migration ahead of schedule.', author: 'CTO, FinTech Co.' },
  { quote: 'Redesigned our network with zero downtime and stronger security.', author: 'IT Director, EduCorp' },
  { quote: 'Proactive, detail-oriented, and great communication throughout.', author: 'Ops Lead, HealthTech' },
]

export default function Testimonials() {
  return (
    <div className="container">
      <p className="eyebrow">Testimonials</p>
      <h2>What partners say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-author">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
