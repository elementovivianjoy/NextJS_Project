"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  id?: string;
}

export const About = ({ id }: AboutProps) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id={id} className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-900/50 bg-center [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,#1a1a1a,transparent)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            {...fadeIn}
            className="relative mb-12 lg:mb-0"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl">
              <Image
                src="/images/about-us.png"
                alt="About us"
                width={800}
                height={600}
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                quality={100}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">
                About Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Dynamic Web Application using{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Next.js and Tailwind CSS
                </span>
              </h2>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Objective Section */}
              <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Objective
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The goal is to develop a responsive and dynamic web application that showcases 
                  frontend development skills, API integration, role-based access, 
                  and data visualization—all built with modern tools like Next.js and Tailwind CSS.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Responsive Design",
                  "API Integration Using JSONPlaceholder and Fetch using tanstack query library",
                  "Role-based Access",
                  "Data Visualization Using ApexChart library",
                  "User Authentication and validation using zod",
                  "Deployment and Hosting using vercel and github",
                  "UI styling using tailwind, shadcn and flowbite"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
