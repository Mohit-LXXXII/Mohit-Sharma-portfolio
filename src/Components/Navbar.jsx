import { useEffect } from "react";

export const Navbar = ({menuOpen,setMenuOpen}) => {
    useEffect(()=>
    {
        document.body.style.overflow=menuOpen?"hidden":"empty"
    }
    ,[menuOpen])
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#home" className="
          font-mono text-xl font-bold text-white ">
            Mohit <span className="text-blue-500 bg-gradient-to-r from-blue-700 bg-clip-text text-transparent to-white ">Sharma</span>
          </a>

          {/* Hamburger menu for mobile */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=>setMenuOpen(prev=>!prev)}>
            &#9776;
          </div>

          {/* Navigation links for desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#project" className="text-gray-300 hover:text-white transition-colors">Project</a>
            <a href="#certis" className="text-gray-300 hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

        </div>
      </div>
    </nav>
  );
};
