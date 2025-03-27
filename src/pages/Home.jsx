import { Link } from "react-router-dom";
import { HeartHandshake, HelpingHand, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage:
            "url('13632.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-70 p-6 rounded-lg w-full max-w-lg">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl font-bold text-white"
          >
            Maa Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mt-4"
          >
            Helping Mothers & Grandmothers with Medical Assistance ❤️
          </motion.p>

          {/* Responsive Button Container */}
          <div className="mt-6 flex flex-col md:flex-row md:justify-center gap-4 items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full md:w-auto"
            >
              <Link
                to="/get-involved"
                className="block text-center px-6 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-gray-200"
        >
          How We Help
        </motion.h2>
        <p className="text-gray-400 mt-2">
          We provide medical assistance to every Maa, Nanimaa, and
          Dadi and Women in need.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <feature.icon size={50} className="text-pink-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-pink-600 text-white text-center py-10"
      >
        <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
        <p className="mt-3">Support mothers and grandmothers in need.</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block mt-4"
        >
          <Link
            to="/get-involved"
            className="px-6 py-3 bg-white text-pink-600 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Involved
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Features Data
const features = [
  {
    title: "Medical Support",
    description:
      "Free checkups, medicines, and treatments for mothers and grandmothers.",
    icon: HeartHandshake,
  },
  {
    title: "Doctor Consultation",
    description: "Connect with top doctors for expert medical advice.",
    icon: Stethoscope,
  },
  {
    title: "Emergency Assistance",
    description:
      "Immediate help for critical medical conditions and emergencies.",
    icon: HelpingHand,
  },
];

export default Home;
