
export const MobileMenu = ({menuOpen,setMenuOpen})=>{

  return(
   <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
    `}>
    <button onClick={() => setMenuOpen(false)}
    className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
    arial-label="Close Menu"
    >&times;
    </button>
    <a href="#home" className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
      ${menuOpen ? "opacity-100 translate-y-0" :  "opacity-0 translate-y-5"}
      `} onClick={() => setMenuOpen(false)}>

      Home
    </a>
    <a href="#about"  className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
      ${menuOpen ? "opacity-100 translate-y-0" :  "opacity-0 translate-y-5"}
      `} onClick={() => setMenuOpen(false)}>

      About
    </a>
    <a href="#services"  className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
      ${menuOpen ? "opacity-100 translate-y-0" :  "opacity-0 translate-y-5"}
      `} onClick={() => setMenuOpen(false)}>
      Services
    </a>

    <a href="#projects"  className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
      ${menuOpen ? "opacity-100 translate-y-0" :  "opacity-0 translate-y-5"}
      `} onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#contact"  className={`text-2xl font-semibold text-white my-4 transition-transform duration-300
      ${menuOpen ? "opacity-100 translate-y-0" :  "opacity-0 translate-y-5"}
      `} onClick={() => setMenuOpen(false)}>
      Contact
    </a>
    <a href="/CV Abdelkrim BOUMAHDI.pdf" download="CV Abdelkrim BOUMAHDI.pdf" className="border-blue-500 border-2 bg-transparent text-blue-500 py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"> Download Resume !</a>

  </div>);
};
