import { motion } from "framer-motion";

const donors = [
  "Sonam Kumari",
  "Ankit Kumar",
  "Karan Kumar",
  "Ketan Sharma",
  "Mohit Kumar",
  "Manikant Pandey",
  "Subham Pandey",
  "Shadman Azim",
  "Pritam Singh",
  "Kamlesh Kumar",
  // Add more donor names here manually
];

const Stories = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-12">
      {/* Introduction Section */}
      <div className="text-center">
        <h1 className="text-4xl mt-10 font-bold text-pink-500">Our Impact Stories</h1>
        <p className="mt-4 text-gray-300">
          Thanks to our generous donors, we've helped many women in medical emergencies. 
          Here are some inspiring stories and a list of those who made it possible.
        </p>
      </div>

      {/* Success Stories Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">A Mother’s Life Saved</h2>
          <p className="text-gray-300 mt-3">
            With our support, Meera Devi underwent a life-saving operation. Your contributions made this possible.  
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white">Timely Help for Kavita</h2>
          <p className="text-gray-300 mt-3">
            Kavita, a grandmother, received urgent medical assistance when she needed it most. 
            This was only possible because of generous donors like you.  
          </p>
        </div>
      </div>

      {/* Auto-Scrolling Donor List */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-pink-500">Thank You, Donors!</h2>
        <div className="relative overflow-hidden h-40 mt-4">
          <motion.div
            animate={{ y: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="text-lg text-gray-200 space-y-3"
          >
            {donors.map((donor, index) => (
              <p key={index} className="py-1">{donor}</p>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <p className="text-gray-300">
          Want to be part of this change? Donate today and see your name here!  
        </p>
        <a href="/get-involved" className="mt-4 inline-block px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default Stories;
