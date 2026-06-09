import React from 'react'

export default function Hero() {
  return (
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="pill">Available for roles & consulting</p>
        <h1>Cybersecurity, Network & Cloud Engineer crafting resilient systems.</h1>
        <p className="lede">I secure and scale infrastructure across cloud and on-prem, delivering reliable, compliant environments for modern teams.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a className="btn btn-secondary" href="#contact">Book a call</a>
        </div>
        <div className="hero-meta">
          <div><strong>80+</strong><span>Deployments</span></div>
          <div><strong>50+</strong><span>Cloud migrations</span></div>
          <div><strong>5+</strong><span>Years experience</span></div>
        </div>
      </div>
      <div className="hero-card">
        <div className="card-title">Key strengths</div>
        <ul>
          <li>Zero-trust architectures</li>
          <li>Network segmentation & SD-WAN</li>
          <li>Cloud security automation</li>
          <li>Disaster recovery & observability</li>
        </ul>
      </div>
    </div>
  )
}
