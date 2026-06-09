import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <header className="portfolio-heading">
        <div className="container">Portfolio</div>
      </header>
      <main>
        <section id="home" className="hero"><Hero /></section>
        <section id="about" className="section"><About /></section>
        <section id="skills" className="section alt"><Skills /></section>
        <section id="certifications" className="section"><Certifications /></section>
        <section id="projects" className="section alt"><Projects /></section>
        <section id="testimonials" className="section"><Testimonials /></section>
        <section id="contact" className="section alt"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}
