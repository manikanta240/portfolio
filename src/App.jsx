import React, { useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation()
  const pageRef = useRef(null)

  useGSAP(
    () => {
      if (!pageRef.current) return
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 28, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power3.out'
        }
      )
    },
    { dependencies: [location.pathname], revertOnUpdate: true }
  )

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-[#C9B59C] via-[#E8D5C4] to-[#F5E6D3] text-[#51372C] overflow-x-hidden'>
      <Navigation />
      <main className='flex-1 w-full pt-20 flex flex-col min-h-0'>
        <div
          key={location.pathname}
          ref={pageRef}
          className='flex-1 w-full flex flex-col'
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Skill' element={<Skill />} />
            <Route path='/Projects' element={<Projects />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
