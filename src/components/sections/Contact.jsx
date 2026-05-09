
import {RevealOnScroll} from '../RevealOnScroll';

export const Contact = () =>{

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>

      <div className="px-4 w-80 md:w-180 ">
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <div>
              <p className="text-gray-400 mb-4"><strong className="text-white"><u>Name</u> : </strong> Abdelkrim BOUMAHDI</p>
            </div>

              <div>
                <p className="text-gray-400 mb-4"><strong className="text-white"><u>Phone</u> : </strong> +(213) 777-674-894</p>
              </div>


                <div>
                  <p className="text-gray-400 mb-4"><strong className="text-white"><u>Experience</u> : </strong> +12y </p>
                </div>


                  <div>
                    <p className="text-gray-400 mb-4"><strong className="text-white"><u>Email</u> : </strong>  abdelkrim.boumahdi@gmail.com </p>
                  </div>


                    <div>
                      <p className="text-gray-400 mb-4"><strong className="text-white"><u>Freelance</u> : </strong> Avalaible</p>
                    </div>


                      <div>
                        <p className="text-gray-400 mb-4"><strong className="text-white"><u>Languages</u> : </strong>English, French & Arabic</p>
                      </div>
          </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
