import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Handle Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all ${
        scrolling ? "bg-gray-900 shadow-md" : "bg-transparent"
      } backdrop-blur-md text-white`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Maa Foundation
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          <NavItem to="/get-involved" text="Get Involved" />
          <NavItem to="/stories" text="Stories" />
          <NavItem to="/contact" text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 text-white text-center py-4 space-y-4"
        >
          <NavItem to="/" text="Home" onClick={() => setIsOpen(false)} />
          <NavItem to="/about" text="About" onClick={() => setIsOpen(false)} />
          <NavItem to="/get-involved" text="Get Involved" onClick={() => setIsOpen(false)} />
          <NavItem to="/stories" text="Stories" onClick={() => setIsOpen(false)} />
          <NavItem to="/contact" text="Contact" onClick={() => setIsOpen(false)} />
        </motion.div>
      )}
    </motion.nav>
  );
};

// NavItem Component for Reusability
const NavItem = ({ to, text, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link to={to} className="hover:text-pink-500 transition" onClick={onClick}>
      {text}
    </Link>
  </motion.div>
);

export default Navbar;
