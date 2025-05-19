"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  id?: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
    return (
        <section id={id} className="relative isolate min-h-screen flex items-center bg-gray-50 dark:bg-gray-950">
            {/* Background gradient */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:to-rose-500/20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-300 dark:ring-blue-600/40 mb-8">
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
                        <span className="block text-blue-600 dark:text-blue-400 mt-2">
                            using Next.js and Tailwind CSS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300"
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
                            className="rounded-md bg-blue-600 hover:bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-200"
                        >
                            Get started <span className="ml-2" aria-hidden="true">→</span>
                        </a>
                        <a
                            href="#"
                            className="rounded-md border border-gray-500 dark:border-gray-600 px-6 py-3 text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200"
                        >
                            Learn more
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom background gradient */}
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300/30 to-pink-300/30 dark:from-blue-600/20 dark:to-fuchsia-500/20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
            </div>
        </section>
    );
};

export default Hero;
