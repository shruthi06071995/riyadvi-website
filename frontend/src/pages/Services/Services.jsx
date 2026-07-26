import { FaLaptopCode, FaMobileAlt, FaCloud, FaRobot, FaShieldAlt, FaChartLine, FaPalette, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
    {
        icon: FaLaptopCode,
        title: "Web Development",
        description:
            "Modern and responsive websites using the latest technologies."
    },

    {
        icon: FaMobileAlt,
        title: "Mobile App Development",
        description:
            "Android and iOS applications with excellent user experience."
    },

    {
        icon: FaCloud,
        title: "Cloud Solutions",
        description:
            "Secure cloud infrastructure and deployment services."
    },

    {
        icon: FaRobot,
        title: "AI Solutions",
        description:
            "Artificial Intelligence solutions for modern businesses."
    },

    {
        icon: FaShieldAlt,
        title: "Cyber Security",
        description:
            "Protect your business with advanced security solutions."
    },

    {
        icon: FaChartLine,
        title: "Data Analytics",
        description:
            "Transform business data into meaningful insights."
    }
];

function Services() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100">

            <div className="container mx-auto px-6">

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
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900">
                    Our Services
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
                    className="mt-6 text-center text-gray-600 max-w-2xl mx-auto text-lg leading-8">
                    We build modern digital solutions that help businesses
                    grow faster with innovative web, mobile, and cloud
                    technologies.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {services.map((service, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: 0.95
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2
                            }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl shadow-lg p-8 text-center border  border-transparent transition-all duration-300
                                hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500">

                            <div className="text-center">

                                <div className="group w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-all duration-300">

                                    <service.icon className="group text-3xl text-blue-600 group-hover:text-white group-hover:rotate-15" />

                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

                <motion.div
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
                        delay: 0.4
                    }}
                    viewport={{ once: true }}
                    className="text-center mt-16">

                    <Link to="/services" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl" >

                        View All Services
                        <FaArrowRight />

                    </Link>

                </motion.div>


            </div>

        </section>
    );
}

export default Services;