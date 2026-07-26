import { motion } from "framer-motion";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "John Smith",
        role: "CEO, ABC Company",
        image: client3,
        rating: 5,
        review: "Riyadvi transformed our business with an amazing website. Their team delivered on time and exceeded our expectations."
    },
    {
        id: 2,
        name: "Sarah Wilson",
        role: "Founder, XYZ Solutions",
        image: client2,
        rating: 5,
        review: "Professional team with excellent support. Highly recommended for modern web development."
    },
    {
        id: 3,
        name: "Prem Nath",
        role: "Managing Director",
        image: client1,
        rating: 5,
        review: "Excellent communication, timely delivery, and outstanding quality. We are extremely happy."
    }
];

function Testimonials() {
    return (
        <>
            <section className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-slate-400">

                <div className="container mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl lg:gap-10 font-bold text-center text-gray-900"
                    >

                        What Our Clients Say

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
                        className="mt-6 text-center text-gray-600 text-lg leading-8 max-w-3xl mx-auto"
                    >

                        Hear what our happy clients say about their experience working with Riyadvi Software Technologies.

                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                        {testimonials.map((testimonial, index) => (

                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-transparent hover:border-blue-200 hover:scale-[1.02]"
                            >

                                {/* inside card  */}
                                <div className="flex justify-center gap-1 mb-6">

                                    {/* Stars  */}
                                    {[...Array(testimonial.rating)].map((_, index) => (

                                        <FaStar
                                            key={index}
                                            className="text-yellow-400 text-xl cursor-default transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                                        />

                                    ))}

                                </div>

                                <p className="text-gray-600 leading-8 italic min-h-[100px]">

                                    {testimonial.review}

                                </p>

                                <div className="mt-8 flex flex-col items-center">

                                    <div>

                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            loading="lazy"
                                            className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500 group-hover:rotate-3"
                                        />

                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">

                                        {testimonial.name}

                                    </h3>

                                    <p className="text-blue-600 mt-1">

                                        {testimonial.role}

                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    );
}

export default Testimonials;