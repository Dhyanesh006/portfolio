import React from 'react'

export default function About() {
  return (
    <div className="container about-grid">
      <div>
        <p className="eyebrow">About</p>
        <h2>Security-focused engineer with a cloud-first mindset.</h2>
        <p className="body">I design, secure, and modernize infrastructure for teams that need reliability and compliance without sacrificing speed.</p>
      </div>
      <div className="about-panels">
        <div className="panel">
          <h3>What I do</h3>
          <ul>
            <li>Zero-trust and network segmentation</li>
            <li>Cloud landing zones and guardrails</li>
            <li>Automation for compliance and DR</li>
          </ul>
        </div>
        <div className="panel stats">
          <div><strong>80+</strong><span>Deployments</span></div>
          <div><strong>50+</strong><span>Cloud migrations</span></div>
          <div><strong>5+</strong><span>Years</span></div>
        </div>
      </div>
    </div>
  )
}
