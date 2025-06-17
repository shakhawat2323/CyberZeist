import { motion } from "framer-motion";
import {
  FaPlay,
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaSmile,
} from "react-icons/fa";
import CountUp from "react-countup";

export default function HeroSection() {
  return (
    <div className="bg-[#0D0F1A]">
      {/* Hero Banner */}
      {/* <div className="flex items-center justify-center py-20 px-4">
        <motion.div
          className="relative w-full max-w-5xl bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl"
          style={{ backgroundImage: "url('/agency-bg.png')" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl"></div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-12">
            <motion.div
              className="bg-cyan-300 p-4 rounded-full mb-6 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <FaPlay className="text-white text-xl" />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let’s best Something Agency
            </motion.h1>

            <motion.p
              className="text-sm md:text-base text-gray-200 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              There are many variations of passages of agency Lorem Ipsum Fasts
              injecte.
            </motion.p>

            <motion.button
              className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              APPLY NOW
            </motion.button>
          </div>
        </motion.div>
      </div> */}

      {/* Counter Section */}
      <motion.div
        className="bg-[#141414] py-12 px-4 rounded-3xl max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          { icon: <FaUsers />, value: 5000, label: "VISITOR" },
          { icon: <FaShoppingCart />, value: 2000, label: "USER" },
          { icon: <FaBoxOpen />, value: 1500, label: "PURCHASE" },
          { icon: <FaSmile />, value: 1000, label: "PRODUCT" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center border-r last:border-none border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="text-4xl text-cyan-400 mb-2">{item.icon}</div>
            <div className="text-3xl font-bold">
              <CountUp end={item.value} duration={2} suffix="+" />
            </div>
            <p className="text-sm font-semibold mt-1">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
