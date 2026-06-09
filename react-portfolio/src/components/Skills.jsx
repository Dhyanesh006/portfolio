import React from 'react'

const items = [
  { title: 'Cloud platforms', desc: 'AWS, Azure, GCP architecture & deployment', level: 90 },
  { title: 'Network design', desc: 'Cisco, Juniper, routing & switching', level: 85 },
  { title: 'Security & compliance', desc: 'Firewalls, VPN, IDS/IPS, Zero Trust', level: 88 },
  { title: 'Infrastructure as Code', desc: 'Terraform, CloudFormation, Ansible', level: 80 },
  { title: 'Security operations', desc: 'SIEM, pen testing, incident response', level: 82 },
  { title: 'Containers & DevSecOps', desc: 'Docker, Kubernetes, CI/CD security', level: 78 },
]

export default function Skills() {
  return (
    <div className="container">
      <p className="eyebrow">Skills</p>
      <h2>What I work with</h2>
      <div className="skills-grid">
        {items.map(({ title, desc, level }) => (
          <div className="skill-card" key={title}>
            <div className="skill-top">
              <h3>{title}</h3>
              <span className="skill-percent">{level}%</span>
            </div>
            <p>{desc}</p>
            <div className="skill-level">
              <div className="skill-bar" style={{ width: `${level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
