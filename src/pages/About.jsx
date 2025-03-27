import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6 md:px-16">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-pink-500">About Maa Foundation</h1>
        <p className="mt-4 text-gray-300">
          Maa Foundation is dedicated to supporting women facing critical medical conditions. 
          We provide financial assistance for surgeries, medical checkups, and emergency treatments 
          by transferring funds directly to their trusted relatives.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-pink-400">Our Mission</h2>
        <p className="mt-2 text-gray-300">
          Our mission is to ensure that no woman is left untreated due to financial constraints. 
          We support women whose families cannot afford medical expenses, ensuring they receive 
          the care they need during emergencies.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-pink-400">Our Vision</h2>
        <p className="mt-2 text-gray-300">
          We envision a world where no woman suffers due to a lack of financial support for 
          medical emergencies. Our goal is to create a compassionate community where life-saving 
          treatments are accessible to every woman, regardless of her circumstances.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
