
import { RevealOnScroll } from "../RevealOnScroll"

export const Home=()=>{
    return <section id="home" className="min-h-screen  flex items-center justify-center relative ">
        <RevealOnScroll>

        <div className="text-center z-10 px-4 ">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-lava bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-purple-900 leading-right">

                Hi,I'm Mohit
            </h1>
            <p className="text-gray-400 text-2xl mb-8 max-w-lg mx-auto ">
                I'am developer who is in learning phase. 
            </p>
            <p className="bg-gradient-to-l from-pink-500 to-blue-700 bg-clip-text text-transparent mb-6 text-2xl animate-lava">An Idiotic Apprentice Builder</p>
            <div className="flex justify-center space-x-4">
                <a href="#project" className="bg-blue-500 text-white py-3 px-6 rounded  font-medium transition relative  overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                    View Project
                </a>
                <a href="#contact" className="border border-blue-500/50 text-gray-100 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-purple-700 ">
                    Contact Me
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}