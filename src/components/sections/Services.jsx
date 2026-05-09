import {RevealOnScroll} from '../RevealOnScroll';


export const Services = () =>{

  return (

      <section id="services" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="font-semibold"> Web Developement</h3>
              <p className="text-gray-400 mb-4"> Designing and developing modern, scalable, and high-performance web applications with clean architecture and intuitive user experiences.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="font-semibold"> AI Developement & Data Science Projects</h3>
              <p className="text-gray-400 mb-4"> Handling complex data and developing modern AI applications using Machine Learning, Deep Learning, and fine-tuned Large Language Models (LLMs).</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="font-semibold"> Offering Courses for Performance Analyst </h3>
              <p className="text-gray-400 mb-4"> Providing specialized courses for performance analysts to develop data analysis skills and leverage data-driven methods for evaluating player performance and tactical insights.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="font-semibold"> Desktop Application </h3>
              <p className="text-gray-400 mb-4">Designing and developing modern desktop applications, including business and sales management systems, with a focus on performance, usability, and scalability.</p>
            </div>
          </div>
        </div>

        </RevealOnScroll>
      </section>

  );

};
