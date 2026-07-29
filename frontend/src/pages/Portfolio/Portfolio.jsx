import famms from "../../assets/images/famms.png";
import riyadvi from "../../assets/images/riyadvi.png";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "E-Commerce Website",
        description:
            "A full-stack e-commerce application with product management, shopping cart, and authentication.",
        image: famms,
        technologies: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "React + Bootstrap"
        ],
        github:
            "https://github.com/shruthi06071995/Famms-App",
        live:
            "https://famms-app.vercel.app/"
    },
    {
        id: 2,
        title: "Riyadvi Software Technologies Website",
        description:
            "A modern software company website built with React and Tailwind CSS, featuring responsive design, service showcases, portfolio, and contact sections.",
        image: riyadvi,
        technologies: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Tailwind CSS"
        ],
        github:
            "https://github.com/shruthi06071995/riyadvi-website/tree/main",
        live:
            "https://riyadvi-website-revamp.onrender.com/"
    }
]

function Portfolio() {
    return (
        <>
            <section className="py-20 bg-gradient-to-br from-slate-200 via-white to-blue-100">

                <div className="container mx-auto px-6 max-w-7xl">

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center text-gray-900"
                    >

                        Our Projects

                    </motion.h2>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2
                        }}
                        viewport={{ once: true }}
                        className="mt-6 text-center text-gray-600 text-lg max-w-3xl mx-auto leading-8"
                    >

                        Explore some of the successful software solutions
                        we have designed and developed using modern web technologies.
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

                        {projects.map((project, index) => (

                            <motion.div
                                key={project.id}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                    scale: 0.95
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2
                                }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden shadow-md  hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
                            >

                                <div className="overflow-hidden">

                                    <img src={project.image} alt={project.title} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" />

                                </div>

                                <div className="p-8">

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">

                                        {project.title}

                                    </h3>

                                    <p className="text-gray-600 leading-7 min-h-[100px]">

                                        {project.description}

                                    </p>

                                    {/* Technology Badges  */}
                                    <div className="flex flex-wrap gap-3 mt-6">

                                        {project.technologies.map((tech, index) => (

                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 cursor-default shadow-sm"
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-6">

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-black transition-all duration-300 hover:scale-105"
                                        >

                                            <FaGithub />

                                        </a>

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                                        >

                                            <FaExternalLinkAlt />
                                            Live Demo
                                        </a>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    );
}

export default Portfolio;