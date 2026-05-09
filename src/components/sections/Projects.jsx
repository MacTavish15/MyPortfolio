import {RevealOnScroll} from '../RevealOnScroll';


export const Projects = () =>{

  return(

    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
          <h3 className="text-xl font-bold mb-2">Performance analysis for predictive defensive metric in football</h3>
          <p className="text-gray-400 mb-4">In realm of data football, researchers are working to automate the evaluation of player performance across both defensive and offensive phases. This research investigates the relationship between team players in the defensive scenarios, focusing on their strategies for countering the opposition team. </p>
          <div className="flex flew-wrap gap-2 mb-4">
            {["Python","Scikit-learn","Data Analysis"].map((tech, key)=>(
              <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}

              </span>

            ))}
          </div>
          <div className="flex  justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 mt-2 transition-colors" href="https://medium.com/@abdelkrim.boumahdi/performance-analysis-for-predictive-defensive-metric-in-football-68d0eee6b2f6">View Project →</a>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
          <h3 className="text-xl font-bold mb-2">Performance analysis: New metrics for measuring space management</h3>
          <p className="text-gray-400 mb-4">The aim of this multi-informative research paper is to find metrics for the evaluation of players in the defensive phase, the quality of the pass, and the exploitation of spaces by the recipient player in the attacking phase. </p>
          <div>
            {["Python","Shapely","Data Analysis"].map((tech, key)=>(
              <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}

              </span>

            ))}
          </div>
          <div className="flex  justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 mt-2 transition-colors" href="https://medium.com/@abdelkrim.boumahdi/performance-analysis-new-metrics-for-measuring-space-management-5fc637353bcd">View Project →</a>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
          <h3 className="text-xl font-bold mb-2">Depth map estimation from single image.</h3>
          <p className="text-gray-400 mb-4">Estimation depth map from single image for objects contains the image.</p>
          <div>
            {["Matlab","Machine Learning","Computer Vision"].map((tech, key)=>(
              <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}

              </span>

            ))}
          </div>
          <div className="flex  justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 mt-2 transition-colors" href="https://www.researchgate.net/publication/325705574_Depth_estimation_from_a_single_2D_image">View Project →</a>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
          <h3 className="text-xl font-bold mb-2">Quran Search.</h3>
          <p className="text-gray-400 mb-4">Dealing with data of Quran to search any verse based on the word, root or Tajweed rules.</p>
          <div>
            {["NLP","AI","fastapi","JS","HTML5","CSS3"].map((tech, key)=>(
              <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}

              </span>

            ))}
          </div>
          <div className="flex  justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 mt-2 transition-colors" href="#">View Project →</a>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
          <h3 className="text-xl font-bold mb-2">Bio-info tools package (Python).</h3>
          <p className="text-gray-400 mb-4">bioinfo-tools is a collection of bioinformatics utilities and computational tools designed to support biological data analysis, processing. The package provides efficient solutions for handling genomic, proteomic, and sequence-based data, helping researchers automate workflows, analyze biological datasets, and search meaningful insights using modern computational methods.</p>
          <div>
            {["bioinformatics","Data Analysis","Python"].map((tech, key)=>(
              <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}

              </span>

            ))}
          </div>
          <div className="flex  justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 mt-2 transition-colors" href="#">View Project →</a>
          </div>
        </div>


        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
          <h3 className="text-xl font-bold mb-2">Text2UML ( Diagram of Classes).</h3>
          <p className="text-gray-400 mb-4">Fine tuninig a llm for converting text input from user into Diagram of classes  (UML).</p>
          <div>
            {["LLMs","Fine-tuning","UML","React","fastapi"].map((tech, key)=>(
              <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  {tech}

              </span>

            ))}
          </div>
          <div className="flex  justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 mt-2 transition-colors" href="#">View Project →</a>
          </div>
        </div>

        </div>

      </div>
      </RevealOnScroll>

    </section>

  );


};
