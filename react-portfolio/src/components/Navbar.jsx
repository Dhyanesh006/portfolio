import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="container nav-inner">
        <div className="logo">Portfolio</div>
        <ul className="nav-menu">
          <li><a className="nav-link" href="#home">Home</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#skills">Skills</a></li>
          <li><a className="nav-link" href="#certifications">Certifications</a></li>
          <li><a className="nav-link" href="#projects">Projects</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
