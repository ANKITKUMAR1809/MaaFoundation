import { useState } from "react";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Formspree setup
  const [state, handleSubmit] = useForm("mzzeaprj");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6"
    >
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-pink-500"
        >
          Contact Us
        </motion.h1>

        <p className="text-gray-300 mt-3">
          We are a fully online foundation, always available to help and support you. Feel free to reach out anytime! 💖
        </p>

        {/* Contact Methods */}
        <div className="mt-6 space-y-6">
          {/* Email Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <Mail className="text-pink-500 mr-3" size={24} />
            <a href="mailto:foundationmaa@myyahoo.com" className="text-lg font-medium hover:underline">
              foundationmaa@myyahoo.com
            </a>
          </motion.div>

          {/* Message Us */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <MessageCircle className="text-pink-500 mr-3" size={24} />
            <p className="text-lg font-medium">Message us anytime—we're here to help!</p>
          </motion.div>
        </div>

        {/* Get Help Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFormOpen(true)}
          className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition flex items-center mx-auto"
        >
          <HelpCircle className="mr-2" />
          Get Help
        </motion.button>

        {/* Contact Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
              <h2 className="text-2xl font-semibold text-white text-center">Get in Touch</h2>
              
              {state.succeeded ? (
                <p className="text-green-400 text-center mt-4">Thanks for reaching out! We will contact you soon. 💖</p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4">
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full p-2 bg-gray-700 text-white rounded-lg"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                  <label htmlFor="message" className="block text-gray-300 text-sm mt-4 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full p-2 bg-gray-700 text-white rounded-lg"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />

                  <button type="submit" disabled={state.submitting} className="mt-4 w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                    Send Message
                  </button>
                </form>
              )}

              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="mt-4 w-full text-gray-400 hover:text-white text-center"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-gray-400 text-sm">
          <p>Maa Foundation is an online community dedicated to supporting women in need.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
