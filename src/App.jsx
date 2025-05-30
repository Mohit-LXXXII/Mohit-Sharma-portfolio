import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
// import { MobileMenu } from './Components/MobileMenu' 
import { LoadingScreen } from './Components/LoadingScreen'
import { MobileMenu } from './Components/MobileMenu'
import { Home } from './Components/sections/Home'
import { About } from './Components/sections/About'
import { Project } from './Components/sections/Project'
import { Contact } from './Components/sections/Contact'
function App() {
  

  const [isLoaded,setIsLoaded]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded?"opacity-100":"opacity-0"} bg-black text-gray-200`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        </div>
    </>
  )
}

export default App
