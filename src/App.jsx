import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './functioncomp/Home'
import Agents from './functioncomp/Agents'
import Properties from './functioncomp/Properties'
import About from './functioncomp/About'
import Blog from './functioncomp/Blog'
import Contact from './functioncomp/Contact'



function App() {

  return (

    <div>

      <Home/>
      <About/>
      <Agents/>
      <Properties/>
      <Blog/>
      <Contact/>
      
  </div>
      
  )
}

export default App
