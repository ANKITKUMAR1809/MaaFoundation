import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-10 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white">Maa Foundation</h2>
          <p className="mt-2 text-gray-400">
            Helping mothers, grandmothers, and all women with{" "}
            <strong>medical assistance</strong> and <strong>support</strong>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/get-involved" className="hover:text-pink-500 transition">
                Get Involved
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-xl font-bold text-white">Contact Us</h2>
          <p className="mt-2 flex items-center text-gray-400">
            <PhoneCall className="mr-2 text-pink-500" /> N/A
          </p>
          <p className="flex items-center text-gray-400">
            <Mail className="mr-2 text-pink-500" /> foundationmaa@myyahoo.com</p>

          <h2 className="mt-4 text-xl font-bold text-white">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center border-t border-gray-700 mt-8 pt-4"
      >
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Maa Foundation. All Rights Reserved. ❤️
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
