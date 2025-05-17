"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  id?: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
    return (
        <section id={id} className="relative isolate min-h-screen flex items-center bg-white dark:bg-gray-900">
            {/* Background gradient */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-green-600 ring-1 ring-inset ring-indigo-600/20 mb-8">
                            New Project
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-8"
                    >
                        <span className="block text-gray-900 dark:text-white">
                            Dynamic Web Application
                        </span>
                        <span className="block text-green-600 mt-2">
                            using Next.js and Tailwind CSS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
                    >
                        The goal is to develop a responsive and dynamic web application that
                        showcases frontend development skills, API integration, role-based access,
                        and data visualization—all built with modern tools like Next.js and Tailwind CSS.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <a
                            href="#"
                            className="rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                        >
                            Get started
                            <span className="ml-2" aria-hidden="true">→</span>
                        </a>
                        <a
                            href="#"
                            className="rounded-md border border-gray-300 dark:border-gray-600 px-6 py-3 text-base font-semibold text-gray-900 dark:text-gray-200 hover:border-green-600 hover:text-green-600 dark:hover:text-indigo-400 dark:hover:border-indigo-400 transition-all duration-200"
                        >
                            Learn more <span aria-hidden="true"></span>
                        </a>

                    </motion.div>

                </div>
            </div>

            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
};

export default Hero;
