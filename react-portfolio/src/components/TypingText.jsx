import React, { useState, useEffect, useRef } from 'react'

export default function TypingText({ text, speed = 80, delay = 0, className = '' }) {
  const [displayText, setDisplayText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [hasTyped, setHasTyped] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasTyped])

  useEffect(() => {
    if (!isVisible || hasTyped) return

    const timeout = setTimeout(() => {
      let i = 0
      const timer = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i))
          i++
        } else {
          clearInterval(timer)
          setHasTyped(true)
        }
      }, getVariableSpeed(speed))
      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, text, speed, delay, hasTyped])

  // Variable speed for more natural typing
  const getVariableSpeed = (baseSpeed) => {
    const variation = Math.random() * 40 - 20
    return baseSpeed + variation
  }

  return (
    <span ref={ref} className={`${className} typing-text`}>
      {displayText}
      {isVisible && !hasTyped && <span className="typing-cursor">|</span>}
    </span>
  )
}
