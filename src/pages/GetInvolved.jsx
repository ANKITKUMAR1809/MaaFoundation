import { motion } from "framer-motion";
import { useState } from "react";
import { HeartHandshake, HelpingHand, Share2, X } from "lucide-react";
import qrCode from "./getInvo.jpg"; 
import getIn from "./getInvo.jpg"; 

const GetInvolved = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage:
            `url(${getIn})`,
        }}
      >
        <div className="bg-black bg-opacity-70 p-6 rounded-lg w-full max-w-lg">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Get Involved ❤️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mt-4"
          >
            Join us in supporting mothers and grandmothers in need.
          </motion.p>
        </div>
      </motion.div>

      {/* How to Get Involved */}
      <div className="py-16 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-gray-200"
        >
          Ways You Can Help
        </motion.h2>
        <p className="text-gray-400 mt-2">
          Every action, big or small, makes a difference.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {/* Donate */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <HeartHandshake size={50} className="text-pink-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-white">
              Donate to Save Lives
            </h3>
            <p className="text-gray-400 mt-2">
              Your contribution helps cover medical treatments and support for women in need.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowQR(true)}
              className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
            >
              Donate Now
            </motion.button>
          </motion.div>

          {/* Volunteer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <HelpingHand size={50} className="text-blue-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-white">
              Become a Volunteer
            </h3>
            <p className="text-gray-400 mt-2">
              Help with fundraising, organizing events, or spreading awareness.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:foundationmaa@myyahoo.com"
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition inline-block"
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Spread Awareness */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <Share2 size={50} className="text-green-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-white">
              Spread the Word
            </h3>
            <p className="text-gray-400 mt-2">
              Share our mission on social media and encourage others to help.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition inline-block"
            >
              Share Now
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Scan to Donate via Amazon Pay
            </h2>
            <img src={qrCode} alt="Amazon Pay QR Code" className="w-64 mx-auto" />
            <p className="text-gray-700 mt-2">Thank you for your support! ❤️</p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-pink-600 text-white text-center py-10"
      >
        <h2 className="text-3xl font-bold">Be the Change</h2>
        <p className="mt-3">Every small effort brings hope to someone in need.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowQR(true)}
          className="mt-4 px-6 py-3 bg-white text-pink-600 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Support Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default GetInvolved;
