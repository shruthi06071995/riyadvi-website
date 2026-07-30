import hero from "../../assets/images/hero.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full bg-[radial-gradient(circle,#000_1px,transparent_1px)] [background-size:35px_35px]"></div>
            </div>

            {/* Yellow Glow  */}
            <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-yellow-400/20 blur-[140px] rounded-full"></div>

            {/* Blue Glow  */}
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-500/15 blur-[160px] rounded-full"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">

                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #000 1px, transparent 1px)",
                        backgroundSize: "35px 35px",
                    }}
                ></div>
                
            </div>

            {/* Main Container  */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side */}
                    <motion.div
                        className="space-y-6 max-w-xl"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white shadow-xl rounded-full px-5 py-2 border border-yellow-200"
                        >

                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

                            <span className="text-sm font-medium">
                                Trusted by Businesses Since 2021
                            </span>

                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-yellow-500 font-semibold uppercase tracking-wider">
                            Welcome to Riyadvi Software Technologies
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Empowering Businesses with{" "}
                            <span className="text-yellow-500">
                                Innovative Software Solutions
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-600 text-lg leading-relaxed">
                            We specialize in building modern websites, mobile applications,
                            cloud solutions, AI-powered software, and digital transformation
                            services that help businesses grow faster.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4">

                            <Link
                                to="/contact"
                                className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-center"
                            >
                                Book a Free Consultation
                            </Link>

                            <Link
                                to="/services"
                                className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 text-center"
                            >
                                Our Services
                            </Link>

                        </motion.div>

                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: [0, -10, 0]
                        }}
                        transition={{
                            opacity: { duration: 1 },
                            x: { duration: 1 },
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }} >

                        <img
                            src={hero}
                            alt="Software Development"
                            className="w-full max-w-lg hover:scale-105 transition-all duration-500 drop-shadow-2xl" />

                    </motion.div>

                </div>

            </div>
        </section >
    );
}

export default Hero;