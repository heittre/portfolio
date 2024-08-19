import React from 'react'
import Navbar from './components/Navbar'
import '../src/index.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portofolio from './components/Portofolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portofolio/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}
