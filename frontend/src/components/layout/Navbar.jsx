import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-br from-black via-gray-900 to-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">

          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
          />

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${isActive
                  ? "text-yellow-500"
                  : "text-white hover:text-yellow-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {!token ? (

            <>
              <NavLink
                to="/login"
                className="font-medium text-white hover:text-yellow-500"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="font-medium text-white hover:text-yellow-500"
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white hover:text-red-500"
            >
              Logout
            </button>


          )}

          <Link to="/contact" className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">

            Book a Free Consultation

          </Link>



        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="md:hidden bg-black px-6 py-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 transition-colors duration-300 ${isActive
                    ? "text-yellow-500"
                    : "text-white hover:text-yellow-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {
              !token ? (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-white hover:text-yellow-500"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-white hover:text-yellow-500"
                  >
                    Register
                  </NavLink>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block py-3 text-white hover:text-red-500"
                >
                  Logout
                </button>
              )
            }

            <button
              className="w-full mt-4 bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Book a Free Consultation
            </button>

          </div>
        )
      }
    </nav >
  );
}

export default Navbar;