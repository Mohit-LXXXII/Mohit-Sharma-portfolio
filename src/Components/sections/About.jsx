import { RevealOnScroll } from "../RevealOnScroll"
export const About = () => {
    const frontendSkills=["React","TailwindCSS","Bootstrap"]
    const backendSkills=["Node","SpringBoot","AWS","PostgreSQL"]
    return <section id="about" className="min-h-screen flex items-center justify-center py-20 " >
        <RevealOnScroll>

        <div className="max-w-3xl mx-auto w-full   ">

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent ">About Me</h2>
            <div className=" rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">I'm Mohit Sharma, a self-taught developer on a mission to turn passion into profession. Coming from a non-tech background, I chose the IT path driven by financial responsibility and an unshakable will to grow. I’m currently learning full-stack development with React, Tailwind CSS, and Node.js, building projects that reflect my learning journey. </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 ">FrontEnd</h3>
                        <div className="flex flex-wrap gap-2">{frontendSkills.map((sk,key)=><span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,30,246,.2)] transition" key={key}>{sk}</span>)}</div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 ">BackEnd</h3>
                        <div className="flex flex-wrap gap-2">{backendSkills.map((sk,key)=><span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,30,246,.2)] transition" key={key}>{sk}</span>)}</div>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4 ">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Bachelor in Computer Science </strong>[2023-26]
                        </li>
                        <li>
                             <b>Relevent Course Work</b> : Data Structures,Web Dev ,Cloud Computing
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4 ">💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-100 ">
                        <div>
                            <h4 className="font-semibold ">None</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}