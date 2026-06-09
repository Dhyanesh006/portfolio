import React from 'react'

const projects = [
  {
    title: 'Multi-cloud security architecture',
    desc: 'Built guardrails and monitoring across AWS and Azure with automated compliance.',
    tags: ['AWS', 'Azure', 'Terraform']
  },
  {
    title: 'Enterprise network redesign',
    desc: 'Delivered segmented, resilient campus network with SD-WAN and HA core.',
    tags: ['Cisco', 'SD-WAN', 'BGP/OSPF']
  },
  {
    title: 'Cloud migration & observability',
    desc: 'Migrated workloads to AWS with DR patterns and centralized logging.',
    tags: ['AWS', 'GuardDuty', 'CloudWatch']
  }
]

export default function Projects() {
  return (
    <div className="container">
      <p className="eyebrow">Projects</p>
      <h2>Selected work</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
