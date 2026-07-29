import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BASE_URL from "../../api/api.js";

const contactDetails = [
    {
        id: 1,
        icon: FaMapMarkerAlt,
        title: "Office Address",
        value: "Coimbatore, Tamil Nadu, India"
    },
    {
        id: 2,
        icon: FaPhoneAlt,
        title: "Phone",
        value: "+91 98765 43210"
    },
    {
        id: 3,
        icon: FaEnvelope,
        title: "Email",
        value: "info@riyadvi.com"
    },
    {
        id: 4,
        icon: FaClock,
        title: "Working Hours",
        value: "Mon - Fri | 9:00 AM - 6:00 PM"
    }
];

function Contact() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data) => {

        try {

            const response = await fetch(`${BASE_URL}/contact`, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(data),

            });

            if (!response.ok) {

                throw new Error("Request failed");

            }

            const result = await response.json();

            if (result.success) {

                setSuccessMessage("Your message has been sent successfully!");

                setErrorMessage("");

                reset();

                setTimeout(() => {

                    setSuccessMessage("");

                }, 3000);

            }

        } catch (error) {

            console.log(error);

            setErrorMessage("Something went wrong. Please try again");

            setSuccessMessage("");

            setTimeout(() => {

                setErrorMessage("");

            }, 3000);

        }

    };

    return (
        <>

            <section className="py-20 bg-gradient-to-br from-gray-100 via-gray to-yellow-50">

                <div className="container mx-auto px-6">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center text-gray-900"
                    >

                        Contact Us

                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-6 max-w-3xl mx-auto text-center text-gray-600 leading-8"
                    >

                        Have a project in mind or need expert software solutions?
                        Our team is ready to help you transform your ideas into reality.
                        Get in touch with us today!

                    </motion.p>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <div className="space-y-6">

                            <div className="space-y-6">

                                {contactDetails.map((item, index) => {

                                    const Icon = item.icon;

                                    return (

                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                                        >

                                            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">

                                                <Icon className="text-yellow-600 text-xl" />

                                            </div>

                                            <div>

                                                <h3 className="text-xl font-semibold text-gray-900">

                                                    {item.title}

                                                </h3>

                                                <p className="text-gray-600 mt-2">

                                                    {item.value}

                                                </p>

                                            </div>

                                        </motion.div>

                                    );

                                })}

                            </div>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

                            <h2 className="text-3xl font-bold text-gray-900">

                                Send Us a Message

                            </h2>

                            <p className="text-gray-600 mt-3">

                                Fill out the form below and our team will get back to you as soon as possible.

                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div>

                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            {...register("name", { required: "Name is required" })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                                        />

                                        {errors.name && (

                                            <p className="mt-2 text-red-500 text-sm">

                                                {errors.name.message}

                                            </p>

                                        )}

                                    </div>

                                    <div>

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Enter a valid email"
                                                }
                                            })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        />

                                        {errors.email && (

                                            <p className="mt-2 text-red-500 text-sm">

                                                {errors.email.message}

                                            </p>

                                        )}

                                    </div>

                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div>

                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            {...register("phone", {
                                                required: "Phone number is required",
                                                pattern: {
                                                    value: /^\d{10}$/,
                                                    message: "Enter the Valid Phone Number"
                                                }
                                            })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        />

                                        {errors.phone && (

                                            <p className="mt-2 text-red-500 text-sm">

                                                {errors.phone.message}

                                            </p>

                                        )}

                                    </div>

                                    <div>

                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            {...register("subject", { required: "Subject is required" })}
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        />

                                        {errors.subject && (

                                            <p className="mt-2 text-red-500 text-sm">

                                                {errors.subject.message}

                                            </p>

                                        )}

                                    </div>

                                </div>

                                <textarea
                                    placeholder="Write your message..."
                                    {...register("message", { required: "Message is required" })}
                                    className="w-full border border-gray-300 rounded-lg rows-6 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                </textarea>

                                {successMessage && (

                                    <div className="bg-green-100 text-green-700 p-4 rounded-lg">

                                        {successMessage}

                                    </div>

                                )}

                                {errorMessage && (

                                    <p className="text-red-700">

                                        {errorMessage}

                                    </p>

                                )}

                                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">

                                    Send Message

                                </button>

                            </form>

                        </div>

                    </div>

                    <div className="mt-20">

                        <h2 className="text-3xl font-bold text-center mb-8">

                            Our Location

                        </h2>

                        <div className="rounded-2xl overflow-hidden shadow-lg">

                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps?q=Coimbatore,Tamil%20Nadu&output=embed"
                                width="100%"
                                height="450"
                                loading="lazy"
                                allowFullScreen
                            ></iframe>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}

export default Contact;