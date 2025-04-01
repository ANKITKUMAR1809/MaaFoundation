import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, HelpingHand, Stethoscope } from "lucide-react";
import img from "./13632.jpg";
import qrCode from "../assets/un.jpg"; // QR Code image
import { Projector } from "lucide-react";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [donations, setDonations] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const donorsRef = useRef(null);

  const targetAmount = 200000; // 2 Lakh Target
  const totalDonated = donations.reduce((sum, donor) => sum + donor.amount, 0);
  const progress = Math.min((totalDonated / targetAmount) * 100, 100);

  // ✅ Lazy Load Donations on Scroll
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          "https://maa-foundation-server.onrender.com/api/donations"
        );
        if (response.ok) {
          const data = await response.json();
          setDonations(data);
        }
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchDonations();
      },
      { threshold: 0.5 }
    );

    if (donorsRef.current) observer.observe(donorsRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Submit Donation Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    try {
      const response = await fetch(
        "https://maa-foundation-server.onrender.com/api/donate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, amount: parseInt(amount) }),
        }
      );

      if (response.ok) {
        setDonations((prev) => [...prev, { name, amount: parseInt(amount) }]);
        setName("");
        setAmount("");
        setShowForm(false);
        setShowQR(true);
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* 🌟 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${img})` }}
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

      {/* 🚨 Urgent Help Needed Section */}
      <div className="bg-red-600 text-white text-center py-6 px-4 mt-10 rounded-lg mx-4 md:mx-20 shadow-lg">
        <h2 className="text-2xl font-bold">🚨 URGENT HELP NEEDED 🚨</h2>
        <p className="mt-2 text-lg">
          A loving grandmother <strong>(Nani Maa)</strong> needs **medical
          treatment**. Your support can save a life!
        </p>

        {/* 🎯 Progress Bar */}
        <div className="mt-4">
          <div>
            <h1 className="text-2xl semibo">Target Amount : {targetAmount}</h1>
          </div>
          <div className="bg-gray-800 w-full h-6 rounded-full overflow-hidden">
            <motion.div
              className="bg-white h-full text-black text-sm flex items-center justify-center font-bold"
              style={{ width: `10%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress > 10 ? progress : 10}%` }}
              transition={{ duration: 1 }}
            >
              ₹{totalDonated.toLocaleString()}
            </motion.div>
          </div>
        </div>

        {/* Donate Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 px-6 py-3 bg-white text-red-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
          onClick={() => setShowForm(true)}
        >
          Donate Now ❤️
        </motion.button>
      </div>
      {/* 🛠️ Step to Donate Section */}
      <div className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          📌 Steps to Donate
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Step 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">Step 1: Click Donate Now</h3>
            <p className="text-gray-300 mt-2">
              Tap the "Donate Now" button to begin the process.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">Step 2: Enter Details</h3>
            <p className="text-gray-300 mt-2">
              Fill in your name and the amount you wish to donate.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">Step 3: Scan & Pay</h3>
            <p className="text-gray-300 mt-2">
              After submission, scan the QR code to complete the payment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 🔥 Donation Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-30">
          <div className="bg-gray-900 p-6 rounded-lg text-center text-white relative w-96">
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold">Enter Donation Details</h3>
            <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center"> 
                <h1 className="text-white">Download Qr Code & Pay and Write Your Name</h1> 
                <img
                  src={qrCode}
                  alt="Amazon Pay QR Code"
                  className="w-48 mx-auto mt-4"
                />
              </div>
              <div>
                <a
                  href={qrCode}
                  download={true}
                  className="px-4 py-2 text-white bg-red-500"
                >
                  Download Qr
                </a>
              </div>
              <input
                className="p-2 rounded bg-gray-700 text-white border-none"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="p-2 rounded bg-gray-700 text-white border-none"
                type="number"
                placeholder="Donation Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 🔥 QR Code Popup */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center Z-30">
          <div className="bg-white p-6 rounded-lg text-center relative">
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
              onClick={() => setShowQR(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-gray-800">
              Scan to Donate ❤️
            </h3>
            <img
              src={qrCode}
              alt="Amazon Pay QR Code"
              className="w-48 mx-auto mt-4"
            />
            <a
              href={qrCode}
              download={true}
              className="px-4 py-2 text-white bg-red-500"
            >
              Download Qr
            </a>
          </div>
        </div>
      )}

      {/* 🏆 Auto-Scrolling Recent Donors */}
      <div
        ref={donorsRef}
        className="mt-10 bg-gray-800 p-6 rounded-lg mx-4 md:mx-20 shadow-lg md:h-60 overflow-hidden relative z-0 h-40"
      >
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Recent Donations 💖
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-col gap-2"
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 15, // Slower scrolling
              ease: "easeIn", // Smooth transition
            }}
          >
            {[...donations, ...donations].map((donor, index) => (
              <p key={index} className="text-white text-center py-1">
                {donor.name} donated ₹{donor.amount}
              </p>
            ))}
          </motion.div>
        </div>
      </div>

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
          We provide medical assistance to every Maa, Nanimaa, and Dadi in need.
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

      {/* call to action */}
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
