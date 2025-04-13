/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>

          {/* Hamburger Toggle + Menu Container */}
          <div className="lg:hidden relative w-full">
            {/* Hidden Checkbox */}
            <input id="menu-toggle" type="checkbox" className="peer hidden bg-dark" />
            
            {/* Hamburger Bars */}
            <label
              htmlFor="menu-toggle"
              className="absolute right-4 top-2 z-20 flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
            >
              {/* Three bars */}
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all peer-checked:rotate-45 peer-checked:translate-y-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all peer-checked:opacity-0"></div>
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></div>
            </label>


            {/* Mobile Menu */}
            <div className="peer-checked:flex hidden flex-col mt-12 bg-white dark:bg-gray-800 absolute w-full left-0 top-0 z-10 rounded-lg shadow-md p-4">
              <Link
                href="/"
                className="block py-2 text-gray-700 dark:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 dark:text-gray-300"
              >
                About
              </Link>
              <Link
                href="/team"
                className="block py-2 text-gray-700 dark:text-gray-300"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 dark:text-gray-300"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="block py-2 mt-2 text-white bg-indigo-600 hover:bg-gray-500 text-center rounded-md"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="block py-2 mt-2 text-white bg-gray-700 hover:bg-gray-500 text-center rounded-md"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="/" className="text-gray-700 dark:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/team" className="text-gray-400 hover:text-white">
              Team
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
            
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link
              href="/login"
              className="text-sm text-white bg-indigo-600 hover:bg-gray-800 font-medium rounded-lg px-4 py-2 ml-4"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="text-sm text-white bg-gray-700 hover:bg-indigo-700 font-medium rounded-lg px-4 py-2"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
