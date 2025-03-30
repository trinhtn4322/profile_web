import React from 'react';
import { motion } from 'framer-motion';
import { FaRegClock, FaMapMarkerAlt, FaUserTie, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa'; // Import các icon
import SlidePage from "./SlidePage";

const Page4 = () => {
  return (
    <div>
      <div className="h-screen bg-black text-white p-10">
        {/* Phần đường thẳng và chữ EXPERIENCE */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-1/4 bg-gray-500"></div>
          <motion.h1
            className="mx-4 text-4xl font-noto-bold  text-customOrange"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            EXPERIENCE
          </motion.h1>
          <div className="h-px w-1/4 bg-gray-500"></div>
        </div>

        {/* Chia đôi màn hình */}
        <div className="flex space-x-10">
          {/* Phần trái: Wisky Company */}
          <motion.div
            className="flex-1 p-8 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-opacity-50 border-2 border-dashed border-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <h2 className="text-2xl font-noto-bold mb-4 text-gradient">WISKY COMPANY LIMITED</h2>
            <p className="text-lg font-notose-regu text-gray-300 mb-2">
              <FaUserTie className="inline mr-2 text-yellow-400" />
              Position: <span className="font-notose-regu text-white">AI Engineer</span>
            </p>
            <p className="text-lg font-notose-regu text-gray-300 mb-2">
              <FaRegClock className="inline mr-2 text-yellow-400 " />
              From: <span className="font-semibold text-white font-notose-regu">09-2023</span> to: <span className="font-semibold text-white">12-2023</span>
            </p>
            <p className="text-lg font-notose-regu text-gray-300 mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-yellow-400" />
              Location: <span className="font-notose-regu text-white">Ho Chi Minh City</span>
            </p>
            <p className="text-lg font-notose-regu text-gray-300 mb-2">Responsibilities:</p>
            <ul className="list-disc pl-5 text-gray-300 font-notose-light">
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaProjectDiagram className="inline mr-2 text-yellow-400" />
                Participate in a company project
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaProjectDiagram className="inline mr-2 text-yellow-400" />
                Project: Auto Retail Checkout for Food Shop
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaLaptopCode className="inline mr-2 text-yellow-400" />
                Read and research papers related to the project
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaLaptopCode className="inline mr-2 text-yellow-400" />
                Prepare and process data
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaProjectDiagram className="inline mr-2 text-yellow-400" />
                Collaborate with team members, test and train models
              </motion.li>
            </ul>
          </motion.div>

          {/* Phần phải: Fintech Innovation Solutions */}
          <motion.div
            className="flex-1 p-8 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-opacity-50 border-2 border-dashed border-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <h2 className="text-2xl font-noto-bold mb-4 text-gradient">Fintech Innovation Solutions Joint Stock Company</h2>
            <p className="text-lg font-notose-regu text-gray-300 mb-2">
              <FaUserTie className="inline mr-2 text-yellow-400" />
              Position: <span className=" font-notose-regu text-white">AI Engineer</span>
            </p>
            <p className="text-lg  font-notose-regu text-gray-300 mb-2">
              <FaRegClock className="inline mr-2 text-yellow-400" />
              From: <span className=" font-notose-regu text-white">04-2024</span> to: <span className=" font-notose-regu text-white">09-2024</span>
            </p>
            <p className="text-lg  font-notose-regu text-gray-300 mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-yellow-400" />
              Location: <span className=" font-notose-regu text-white">Ho Chi Minh City</span>
            </p>
            <p className="text-lg  font-notose-regu text-gray-300 mb-2">Responsibilities:</p>
            <ul className="list-disc pl-5 text-gray-300  font-notose-light">
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaUserTie className="inline mr-2 text-yellow-400" />
                Head of AI Department
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaLaptopCode className="inline mr-2 text-yellow-400" />
                Mainly responsible for the company's AI projects
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1, color: "#FFD700" }}
                className="cursor-pointer"
              >
                <FaLaptopCode className="inline mr-2 text-yellow-400" />
                Work and communicate with other departments
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="flex items-center justify-center mt-20">
          <div className="h-px w-1/4 bg-gray-500"></div>
          <motion.h1
            className="mx-4 text-4xl  font-notose-regu  text-customOrange"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            LIFESTYLE
          </motion.h1>
          <div className="h-px w-1/4 bg-gray-500"></div>
        </div>
      </div>

      <SlidePage />
      
    </div>
  );
};

export default Page4;
