import {RevealOnScroll} from '../RevealOnScroll';


export const About = () => {
  const frontendSkills = ["Responsive Design","Chart.js","ApexCharts.js","D3.js","React", "Tailwindcss", "CSS3", "HTML5", "JS"];
  const backendSkills = ["Node.js","Python","Appwrite","fastapi"];
  const aiSkills = ["Python","Visualization","Machine Learnig", "Deep Learning", "LLMs","NLP","Meta-heuristics","Scraping"]
  return(
  <section id="about" className="min-h-screen flex items-center justify-center py-20">
  <RevealOnScroll>

    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"> About Me </h2>
        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-justify text-gray-300 mb-6"> Passionate Web Developer and Data Scientist with expertise in building scalable web applications and developing innovative, data-driven solutions. Skilled in working with data analysis, machine learning, and modern development technologies to create efficient, reliable, and impactful digital products.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transitoin-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key)=>(
                  <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                      text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}

                  </span>

                ))}

              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transitoin-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key)=>(
                  <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                      text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}

                  </span>

                ))}

              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transitoin-all">
            <h3 className="text-xl font-bold mb-4"> AI & Data Science </h3>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((tech, key)=>(
                  <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                      text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}

                  </span>

                ))}

              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Bachelor's degree in Information Systems Engineering and Softwares</strong> - USTHB [2012-2015]
                  </li>
                  <li>
                    Relevant Coursework: Databases, UML, Merise, Web Developement & Data Structure...
                  </li>
                  <li>
                    <strong>Master's degree in Intelligent Computing System </strong> - USTHB [2015-2017]
                  </li>
                  <li>
                    Relevant Coursework: Machine Learning, Deep Learning, Meta-heuristics,, Computer Vision, NLP & Problems Solving...
                  </li>
                  <li>
                    <strong>Ph.D. In Artificial Intelligence </strong> - USTHB [2017-2022]
                  </li>
                  <li>
                    Domain: 3D Modeling, 3D Reconstruction, 3D Object Recognition.
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Work Experiences </h3>
                <div className="space-y-4 text-gray-300">
                    <div >
                      <h4 className="font-semibold">Data Analyst At Southport Club [2024-2025]</h4>
                      <p> Data-driven player scouting and performance analysis based on the tactical, technical, and strategic needs of football clubs.</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    </RevealOnScroll>

  </section>);
};
