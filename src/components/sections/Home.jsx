import {RevealOnScroll} from '../RevealOnScroll';
import myphoto from "../../assets/img.jpg";
export const Home = ()=>{
  return <section id="home" className="min-h-screen flex items-center justify-center relative">
    <RevealOnScroll>
    <div className="text-center z-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mt-15 md:mt-6 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent loading-right"> Hi, I'm Abdelkrim BOUMAHDI</h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <img className="hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] w-75 h-75 rounded-full" src={myphoto}/>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I’m a <strong className="text-white">Web Developer</strong> and <strong className="text-white">Data Scientist</strong> passionate about building modern, intelligent, and user-friendly applications. I create web and desktop solutions, work with machine learning and data analysis, and develop projects focused on performance, usability, and real-world impact. I’m also interested in football analytics and creating educational content to help performance analysts improve their data science skills.
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          View Projects
        </a>
        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
          Contact Me!
        </a>
      </div>
    </div>
    </RevealOnScroll>
  </section>

};
