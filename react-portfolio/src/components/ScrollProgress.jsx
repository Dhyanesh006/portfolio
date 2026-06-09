import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / scrollHeight) * 100
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return null
}
