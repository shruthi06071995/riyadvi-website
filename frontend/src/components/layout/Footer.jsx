import { FaLinkedinIn, FaGithub, FaFacebook, FaInstagram, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">

      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Section  */}
          <div>

            <h2 className="text-3xl font-bold text-white">

              Riyadvi

            </h2>

            <p className="mt-4 leading-7">

              Empowering businesses with innovative software solutions,
              modern web applications, and scalable digital products.

            </p>

          </div>

          {/* Quick Links  */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">

              Quick Links

            </h3>

            <ul className="space-y-3">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services  */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">

              Services

            </h3>

            <ul className="space-y-3">

              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>

            </ul>

          </div>

          {/* Contact  */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">

              Contact

            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <FaMapMarkedAlt className="text-yellow-400" />
                <span>Coimbatore, Tamil Nadu</span>

              </div>

              <div className="flex items-center gap-3">

                <FaPhoneAlt className="text-yellow-400" />
                <span>+91 9876543210</span>

              </div>

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-yellow-400" />
                <span>info@riyadvi.com</span>

              </div>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        {/* Bottom Section  */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p>

            © 2026 Riyadvi Software Technologies.
            All Rights Reserved.

          </p>

        </div>

        {/* Social Icons  */}
        <div className="flex gap-5 text-2xl">

          <FaLinkedinIn className="hover:text-yellow-400 transition duration-300 cursor-pointer" />

          <FaGithub className="hover:text-yellow-400 transition duration-300 cursor-pointer" />

          <FaFacebook className="hover:text-yellow-400 transition duration-300 cursor-pointer" />

          <FaInstagram className="hover:text-yellow-400 transition duration-300 cursor-pointer" />
          
        </div>

      </div>

    </footer>
  );
}

export default Footer;