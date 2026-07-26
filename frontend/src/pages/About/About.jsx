import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaStar, FaLaptopCode, FaRocket, FaClock, FaShieldAlt, FaHeadset, FaHandshake } from "react-icons/fa";
import companyImage from "../../assets/images/companyImage.png"

const aboutCards = [
  {
    id: 1,
    icon: <FaBullseye />,
    title: "Our Mission",
    description: "To deliver innovative, scalable, and user-friendly software solutions that empower businesses to grow."
  },
  {
    id: 2,
    icon: <FaEye />,
    title: "Our Vision",
    description: "To become a globally trusted technology partner known for quality, innovation, and customer success."
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "Our Values",
    description: "Innovation, integrity, teamwork, and continuous learning drive everything we do."
  }
];

const features = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Experienced Developers",
    description: "Our skilled developers create scalable and high-quality software solutions."
  },
  {
    id: 2,
    icon: <FaRocket />,
    title: "Latest Technologies",
    description: "We use modern technologies like React, Node.js, and cloud platforms."
  },
  {
    id: 3,
    icon: <FaClock />,
    title: "On-Time Delivery",
    description: "We follow agile development practices to deliver projects on schedule."
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    description: "Every application is tested thoroughly before deployment."
  },
  {
    id: 5,
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "We provide continuous technical support for our clients."
  },
  {
    id: 6,
    icon: <FaHandshake />,
    title: "Customer First",
    description: "Customer satisfaction is our highest priority."
  }
];

const statistics = [
  {
    id: 1,
    number: "250+",
    title: "Projects Completed"
  },
  {
    id: 2,
    number: "150+",
    title: "Happy Clients"
  },
  {
    id: 3,
    number: "10+",
    title: "Years Experience"
  },
  {
    id: 4,
    number: "25+",
    title: "Team Member"
  }
];

function About() {
  return (

    <>

      <section id="about" className="bg-gradient-to-br from-gray via-gray-200 to-yellow">

        <div className="container mx-auto px-6">

          {/* Heading  */}
          <div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="py-10 text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900"
            >

              About Riyadvi

            </motion.h2>

            {/* subtitle */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 max-w-3xl mx-auto text-center text-gray-600 text-lg leading-8"
            >

              We build modern, scalable, and innovative software
              solutions that help businesses grow through technology.

            </motion.p>

          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2  xl:gap-20 items-center">

            {/* Left Side  */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >

              <div className="rounded-3xl object-cover flex items-center justify-center">

                <img src={companyImage} alt="Riyadvi Solutions" loading="lazy" className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-xl" />

              </div>

            </motion.div>


            {/* Right Side  */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <h3 className="mt-10 text-3xl md:text-4xl font-bold text-gray-900">

                Who We Are

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Riyadvi Software Technologies is a modern software
                development company focused on delivering
                high-quality web applications, mobile solutions,
                and digital transformation services for businesses
                of all sizes.

              </p>

              <p className="mt-6 text-gray-600 leading-8">

                Our team combines creativity, technology, and
                innovation to build secure, scalable, and
                user-friendly solutions that help our clients
                succeed in the digital world.

              </p>

            </motion.div>

          </div>

          <div className="py-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {aboutCards.map((card, index) => (

              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15,ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:scale-[1.04]"
              >

                {/* Icon  */}

                <div className="w-16 h-16 mx-auto rounded-full justify-center bg-blue-100 flex items-center text-3xl text-blue-400 transition-all duration-500 group-hover:bg-blue-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-110 group-hover:rotate-12">

                  {card.icon}

                </div>

                {/* Title  */}

                <h3 className="mt-6 text-2xl md:text-4xl font-bold text-gray-900">

                  {card.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {card.description}

                </p>


              </motion.div>

            ))}

          </div>

        </div>

      </section >

      <section className="py-15 md:py-10 bg-gradient-to-br from-gray via-gray-200 to-yellow">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >

          Our Achievements

        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto leading-8"
        >

          Numbers that reflect our dedication, experience,
          and commitment to delivering successful software
          solutions.


        </motion.p>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">

          {statistics.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:scale-[1.04] mb-5"
            >


              <h3 className="text-5xl md:text-4xl font-bold text-blue-600">

                {item.number}

              </h3>

              <p className="mt-3 text-gray-600 font-medium leading-8">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

      <section className="py-15 md:py-10 bg-gradient-to-br from-gray via-gray-200 to-yellow">

        <div className="container mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900"
          >

            Why Choose Riyadvi

          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-center text-gray-600 max-w-2xl mx-auto leading-8"
          >

            We combine technology, innovation, and customer-focused
            solutions to help businesses succeed in the digital world.


          </motion.p>


          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (

              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg p-8 mb-10 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.04] hover:shadow-2xl"
              >

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12">

                  {feature.icon}

                </div>

                <h3 className="mt-6 text-2xl md:text-4xl font-bold text-gray-900">

                  {feature.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {feature.description}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>

  );
}

export default About;