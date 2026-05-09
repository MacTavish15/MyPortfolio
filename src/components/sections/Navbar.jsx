import {useEffect} from "react";

export const Navbar = ({menuOpen,setMenuOpen})=>{

  useEffect(()=>{
    document.body.style.overflow = menuOpen ? "hidden" : "";
  })

  return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white"> MacTavish150<span className="text-blue-500">.dev</span> </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) =>!prev)}>
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:underline text-gray-300 hove:text-white transition-colors" >
              {""}
              Home{""}
            </a>
            <a href="#about" className="hover:underline text-gray-300 hove:text-white transition-colors" >
              {""}
              About{""}
            </a>
            <a href="#services" className="hover:underline text-gray-300 hove:text-white transition-colors" >
              {""}
              Services{""}
            </a>
            <a href="#projects" className="hover:underline text-gray-300 hove:text-white transition-colors" >
              {""}
              Projects{""}
            </a>
            <a href="#contact" className="hover:underline text-gray-300 hove:text-white transition-colors" >
              {""}
              Contact{""}
            </a>
            <a href="/CV Abdelkrim BOUMAHDI.pdf" download="CV Abdelkrim BOUMAHDI.pdf" className="border-blue-500 border-2 bg-transparent text-blue-500 py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"> Download Resume !</a>
          </div>
        </div>
      </div>
  </nav>
}
