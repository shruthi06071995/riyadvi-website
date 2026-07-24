import { FaCode, FaRocket, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
    {
        icon: FaCode,
        title: "Expert Team",
        description: "Experienced React and Full Stack developers delivering scalable solutions."
    },
    {
        icon: FaRocket,
        title: "Fast Delivery",
        description: "We deliver high-quality software on time without compromising quality."
    },
    {
        icon: FaShieldAlt,
        title: "Secure Solutions",
        description: "Security is built into every application we develop."
    },
    {
        icon: FaLightbulb,
        title: "Innovation",
        description: "We create modern and creative digital solutions for businesses."
    }
];

function WhyChooseUs() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray via-gray-200 to-yellow">

            <div className="max-w-7xl mx-auto px-6">

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
                    Why Choose Us
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
                    className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-lg leadinng-8">
                    We build modern software solutions that help businesses grow faster
                    with innovative technology and reliable support.
                </motion.p>

                {/* Grid Starts Here  */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card One */}
                    {features.map((feature, index) => (

                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50
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
                            className="group bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-yellow-500/30">

                            <div className="text-center">

                                <div className="flex justify-center mb-6">
                                    <feature.icon
                                        className="text-5xl text-yellow-500 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-gray-600">
                                    {feature.description}
                                </p>

                            </div>
                        </motion.div>



                    ))}

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUs;