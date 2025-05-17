"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from "react-icons/fi";

interface ContactProps {
  id?: string;
}

export const Contact = ({ id }: ContactProps) => {
  return (
    <section id={id} className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
          <div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-green-500/10 to-purple-500/10 blur-3xl" />
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-blue-500/10 to-cyan-500/10 blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full 
                         bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&#39;s Start a Conversation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions? We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <div className="flex rounded-lg shadow-sm">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="rounded-l-lg border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-sm px-3"
                      aria-label="Country"
                    >
                      <option>PH</option>
                      <option>US</option>
                      <option>UK</option>
                    </select>
                    <input
                      type="tel"
                      className={`${inputClass} rounded-l-none pl-3`}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FiMessageSquare className="text-gray-400" />
                  </div>
                  <textarea
                    rows={4}
                    className={`${inputClass} pt-2`}
                    placeholder="Write your message here..."
                  />
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div className="ml-3">
                  <label className="text-sm text-gray-600 dark:text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-green-600 hover:text-green-500">
                      privacy policy
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg
                         text-white font-medium
                         bg-gradient-to-r from-green-600 to-green-700
                         hover:from-green-700 hover:to-green-800
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                         transform transition-all duration-200
                         shadow-lg hover:shadow-xl"
              >
                <FiSend className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const inputClass = `
  block w-full pl-10 pr-4 py-3 rounded-lg
  border border-gray-300 dark:border-gray-600
  bg-white dark:bg-gray-700
  text-gray-900 dark:text-white
  placeholder-gray-400 dark:placeholder-gray-300
  focus:ring-2 focus:ring-green-500 focus:border-green-500
  hover:border-gray-400 dark:hover:border-gray-500
  transition-all duration-200
  shadow-sm
`;

export default Contact;
