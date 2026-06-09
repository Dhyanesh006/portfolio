import React from 'react'

const certs = [
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'CEH (Certified Ethical Hacker)', issuer: 'EC-Council', year: '2023' },
  { name: 'CCNA', issuer: 'Cisco', year: '2022' },
]

export default function Certifications() {
  return (
    <div className="container">
      <p className="eyebrow">Certifications</p>
      <h2>Proof of practice</h2>
      <div className="certs-grid">
        {certs.map(({ name, issuer, year }) => (
          <div className="cert-card" key={name}>
            <div className="cert-info">
              <h3>{name}</h3>
              <p className="cert-meta">{issuer} • {year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
