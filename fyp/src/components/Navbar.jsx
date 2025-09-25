import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // ✅ Nav items based on login
  const navItems = user
    ? [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Process", path: "/process" },
        { name: "Size", path: "/size" },
        { name: "Contact", path: "/contact" },
        { name: "Dashboard", path: "/dashboard" },
      ]
    : [{ name: "Home", path: "/" }];

  // ✅ Hide navbar on dashboard
  if (location.pathname === "/dashboard") {
    return null;
  }

  // ✅ Scroll hide/show navbar
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // ✅ Logout handler
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // logout ke baad home page
  };

  const socialLinks = [
    { name: "Facebook", icon: <FontAwesomeIcon icon={faFacebookF} />, url: "https://facebook.com" },
    { name: "Instagram", icon: <FontAwesomeIcon icon={faInstagram} />, url: "https://instagram.com" },
    { name: "Twitter", icon: <FontAwesomeIcon icon={faXTwitter} />, url: "https://twitter.com" },
    { name: "LinkedIn", icon: <FontAwesomeIcon icon={faLinkedinIn} />, url: "https://linkedin.com" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-[#1A1A1A]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-300 dark:border-[#C29A5C]">
            <div className="flex justify-between items-center h-[6vh] md:h-[10vh]">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <motion.img
                  whileHover={{ scale: 1.25 }}
                  src={logo}
                  alt="Sew Divine"
                  className="md:h-16 h-12"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden eb-garamond-google md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={user ? item.path : item.path === "/" ? "/" : "/login"}
                    onClick={(e) => {
                      if (!user && item.path !== "/") {
                        e.preventDefault();
                        alert("⚠️ Please login first to access this page.");
                        navigate("/login");
                      }
                    }}
                    className={`relative px-3 py-2 text-lg font-bold transition-colors duration-200 ${
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

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="px-4 py-1 eb-garamond-google rounded-lg font-semibold border-2 border-gray-800 text-gray-800 dark:border-white dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-1 eb-garamond-google rounded-lg font-semibold border-2 border-gray-800 text-gray-800 dark:border-white dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
                    >
                      Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="px-4 py-1 eb-garamond-google rounded-lg font-semibold border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                  >
                    Logout
                  </button>
                )}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-transparent text-gray-900 dark:text-white"
                  title="Toggle theme"
                >
                  {isDark ? "☀️" : "🌙"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
