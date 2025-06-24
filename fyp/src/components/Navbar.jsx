import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <FontAwesomeIcon icon={faInstagram} />,
      url: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: <FontAwesomeIcon icon={faXTwitter} />,
      url: "https://twitter.com",
    },
    {
      name: "LinkedIn",
      icon: <FontAwesomeIcon icon={faLinkedinIn} />,
      url: "https://linkedin.com",
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-900  transition-transform duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-300 dark:border-gray-700">
            <div className="flex justify-between items-center h-[15vh] bg-transparent dark:bg-gray-900  transition-transform duration-300 ">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-gray-800 dark:text-white"
                >
                  <img src={logo} alt="NYC Suit" className="md:h-24 h-14 " />
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-3 py-2 text-lg font-bold transition-colors duration-200 eb-garamond-google ${
                      location.pathname === item.path
                        ? "text-gray-800 dark:text-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 dark:bg-white"
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Social Links & Theme Toggle */}
              <div className="hidden md:flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xl text-gray-900 dark:text-white hover:opacity-70 transition-opacity duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-transparent text-gray-800 dark:text-white transition-colors duration-200"
                  title="Toggle theme"
                >
                  {isDark ? "☀️" : "🌙"}
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-200"
                >
                  {isDark ? "☀️" : "🌙"}
                </motion.button>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span
                      className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isMobileMenuOpen
                          ? "rotate-45 translate-y-1"
                          : "-translate-y-0.5"
                      }`}
                    ></span>
                    <span
                      className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isMobileMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    ></span>
                    <span
                      className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isMobileMenuOpen
                          ? "-rotate-45 -translate-y-1"
                          : "translate-y-0.5"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-2xl hover:opacity-70 transition-opacity duration-200"
                          title={social.name}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
