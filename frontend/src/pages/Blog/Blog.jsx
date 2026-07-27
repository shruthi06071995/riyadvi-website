import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog4 from "../../assets/images/blog4.png";
import { useState } from "react";

const blogs = [
    {
        id: 1,
        image: blog1,
        title: "Top 5 Web Development Trends in 2026",
        category: "Web Development",
        author: "Riyadvi Team",
        date: "July 2026",
        description: "Discover the latest technologies and trends shaping modern web development."
    },
    {
        id: 2,
        image: blog2,
        title: "Why Every Business Needs a Modern Website",
        category: "Business",
        author: "Riyadvi Team",
        date: "July 2026",
        description: "Learn why having a professional website helps businesses grow in today's digital world."
    },
    {
        id: 3,
        image: blog3,
        title: "Getting Started with React",
        category: "React",
        author: "Riyadvi Team",
        date: "June 2026",
        description: "A beginner-friendly guide to understanding React components and building modern web applications."
    },
    {
        id: 4,
        image: blog4,
        title: "Importance of Responsive Design",
        category: "UI/UX",
        author: "Riyadvi Team",
        date: "June 2026",
        description: "Responsive websites provide a better experience across desktop, tablet, and mobile devices."
    },
];

const categoryies = [
    "All",
    "Web Development",
    "Business",
    "React",
    "UI/UX"
];

function Blog() {

    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <>
            <section className="py-20 bg-gradient-to-br from-gray via-gray-200 to-yellow">

                <div className="container mx-auto px-6">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center text-gray-900"
                    >

                        Our Blog

                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut " }}
                        viewport={{ once: true }}
                        className="mt-6 max-w-3xl mx-auto text-center text-gray-600 leading-8"
                    >

                        Stay updated with the latest technology trends,
                        software development insights, industry news,
                        and expert tips from Riyadvi Software Technologies.

                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-4 mt-12">

                        {categoryies.map((category, index) => (

                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category ? "bg-yellow-500 text-white" : "bg-white text-gray-700 hover:bg-yellow-100"}`}
                            >

                                {category}

                            </button>

                        ))}

                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">

                        {blogs.filter((blog) => {

                            return (

                                selectedCategory === "All" || blog.category === selectedCategory

                            );

                        })


                            .map((blog, index) => (

                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="bg-white overflow-hidden rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                                >

                                    <img src={blog.image} alt={blog.title} className="w-full h-56 mb-4 object-cover rounded-xl hover:scale-105" />

                                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">

                                        {blog.category}

                                    </span>

                                    <h3 className="mt-4 text-2xl font-bold text-gray-900 leading-tight">

                                        {blog.title}

                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-7 text-sm">

                                        {blog.description}

                                    </p>

                                    <hr className="my-6 border-gray-200" />

                                    <div className="mt-6 flex justify-between text-sm text-gray-500">

                                        <span>{blog.author}</span>

                                        <span>{blog.date}</span>

                                    </div>

                                    <button className="group mt-6 flex text-blue-600 items-center gap-2 font-semibold hover:text-blue-800 transition-colors duration-300">

                                        Read More <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

                                    </button>

                                </motion.div>

                            ))}

                    </div>

                </div>

            </section>
        </>
    );
}

export default Blog;
