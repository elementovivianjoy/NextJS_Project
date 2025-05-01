/* eslint-disable @next/next/no-img-element */
import React from "react";

interface AboutProps {
  id?: string;
}

export const About = ({ id }: AboutProps) => {
  return (
    <section id={id} className="bg-gray-50 dark:bg-gray-900">
      <div className="sm:flex items-center max-w-screen-xl mx-auto px-4 py-12">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center bg-gray-50 dark:bg-gray-900">
            <img src="/images/about-us.png" alt="About us" className="bg-gray-50 dark:bg-gray-900"
            width={500}
            height={300} />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-4xl text-gray-900 dark:text-white border-b-2 border-indigo-600 uppercase tracking-tight font-extrabold">
             About us
            </span>
            {/* <h2 className="mb-4 text-4xl border-indigo-600 tracking-tight font-extrabold text-gray-900 dark:text-white">About us</h2> */}
            <h2 className="my-4 font-bold text-3sm sm:text-4sm">
              Dynamic Web Application using {" "}
              <span className="text-indigo-600">
               Next.js and Tailwind CSS
              </span>
            </h2>

            <h5 className="text-gray-700 dark:text-white font-semibold">Objective</h5>
            <p className="text-gray-700 dark:text-white mb-4">
              The goal is to develop a responsive and dynamic web application that showcases 
              frontend development skills, API integration, role-based access, 
              and data visualization—all built with modern tools like Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
