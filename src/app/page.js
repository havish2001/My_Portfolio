'use client'
import Image from 'next/image'
import { useRef } from 'react'
import NavBar from './components/NavBar'
import HomePage from './components/Home'
import './globals.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { SimpleFooter } from './components/Footer'
import Contactme from './components/Contactme'


export default function Home() {
  return (
    <>
    <NavBar/>
    <div id="home"><HomePage/></div>
    <div id="about">
        <About />
    </div>
    <div id="skills"><Skills/></div>
    <div id="projects"><Projects/></div>
    <div id="contactme"><Contactme/></div>
    <div id="footer"><SimpleFooter/></div>
    </>
  )
}
