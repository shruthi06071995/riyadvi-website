import { motion } from "framer-motion";


const testimonials = [
    {
        id: 1,
        name: "John Smith",
        role: "CEO, ABC Company",
        image: "",
        rating: 5,
        review: "Riyadvi transformed our business with an amazing website. Their team delivered on time and exceeded our expectations."
    },
    {
        id: 2,
        name: "Sarah Wilson",
        role: "Founder, XYZ Solutions",
        image: "",
        rating: 5,
        review: "Professional team with excellent support. Highly recommended for modern web development."
    },
    {
        id: 3,
        name: "David Lee",
        role: "Managing Director",
        image: "",
        rating: 5,
        review: "Excellent communication, timely delivery, and outstanding quality. We are extremely happy."
    }
];

function Testimonials() {
    return (
        <>
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-400">

                <div className="container mx-auto px-6">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center text-gray-900"
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

                </div>

            </section>
        </>
    );
}

export default Testimonials;