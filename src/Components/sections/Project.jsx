import { RevealOnScroll } from "../RevealOnScroll"
export const Project=()=>{
    return <section className=" min-h-screen flex items-center justify-center py-20" id="project">
        <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent ">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,.2)] transition-all " >
                    <h3 className="text-xl font-bold mb-2">Java CLI</h3>
                    <p className="text-gray-400 mb-4">Basic Java CLI for manipulating different data structures like array,strings etc.</p>
                    <div>
                        {["Java","OOPS",""].map((sk,key)=>
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,30,246,.2)] transition" key={key}>{sk}</span>
                    )}
                    </div>
                    <div className="flex justify-between items-center ">
                       <a href="https://github.com/LuckyMo-it/Java/tree/main/MenuDriven" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank">View Project→ </a> 
                    </div>
                </div>

            </div>
        </div>
                    </RevealOnScroll>
    </section>
}