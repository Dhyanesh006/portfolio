import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark'
    setDark(saved)
    document.documentElement.classList.toggle('dark', saved)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
