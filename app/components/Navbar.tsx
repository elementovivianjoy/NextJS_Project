
/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className={`border-gray-200 px-4 lg:px-6 ${isScrolled ? "py-1 shadow-md" : "py-3 shadow-sm"
        } dark:bg-gray-800 bg-white transition-all duration-300`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              HelloWorld
            </span>
          </Link>

          {/* Hamburger Toggle (Mobile Only) */}
          <div className="lg:hidden relative w-full">
            {/* Hidden Checkbox for menu toggle */}
            <input
              id="menu-toggle"
              className="peer hidden lg:hidden"
              type="checkbox"
              aria-label="Toggle menu"
            />


            {/* Hamburger Icon */}
            <label
              htmlFor="menu-toggle"
              className="absolute right-4 top-2 z-20 flex flex-col justify-center items-center w-8 h-8 cursor-pointer lg:hidden"
            >
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all peer-checked:rotate-45 peer-checked:translate-y-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all peer-checked:opacity-0"></div>
              <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></div>
            </label>

            {/* Mobile Menu (only shown on toggle) */}
            <div className="peer-checked:flex hidden lg:hidden flex-col mt-12 bg-white dark:bg-gray-800 absolute w-full left-0 top-0 z-10 rounded-lg shadow-md p-4">
              <Link href="/" className="block py-2 z-50 text-gray-700 dark:text-white">
                Home
              </Link>
              <Link href="/about" className="block py-2 z-50 text-gray-700 dark:text-gray-300">
                About
              </Link>
              <Link href="/team" className="block py-2 z-50 text-gray-700 dark:text-gray-300">
                Team
              </Link>
              <Link href="/contact" className="block py-2 z-50 text-gray-700 dark:text-gray-300">
                Contact
              </Link>
              <Link
                href="/login"
                className="block py-2 mt-2 text-white z-50 bg-indigo-600 hover:bg-gray-500 text-center rounded-md"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="block py-2 mt-2 text-white z-50 bg-gray-700 hover:bg-gray-500 text-center rounded-md"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="/" className="text-gray-700 dark:text-white z-50">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-white z-50">
              About
            </Link>
            <Link href="#team" className="text-gray-400 hover:text-white z-50">
              Team
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white z-50">
              Contact
            </Link>
          </div>

          {/* Desktop Login/Register Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/login"
              className="text-sm text-white bg-indigo-600 hover:bg-gray-800 font-medium rounded-lg z-50 px-4 py-2 ml-4"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="text-sm text-white bg-gray-700 hover:bg-indigo-700 font-medium z-50 rounded-lg px-4 py-2"
            >
              Register
            </Link>

            <div className="relative z-50">
              <Button
                onClick={toggleDropdown}
                variant="outline"
                size="icon"
                aria-expanded={dropdownOpen ? "true" : "false"}
                className="flex items-center justify-center z-50"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 z-50 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-white-900 shadow-lg ring-1 ring-black/5 focus:outline-none mt-4"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <Button
                      onClick={() => {
                        setTheme("light");
                        setDropdownOpen(false);
                      }}
                      className="block bg-white dark:bg-white-900 w-full text-left px-4 py-2 text-sm text-gray-700 z-50 mt-4"
                      role="menuitem"
                    >
                      Light
                    </Button>
                    <Button
                      onClick={() => {
                        setTheme("dark");
                        setDropdownOpen(false);
                      }}
                      className="block bg-white dark:bg-white-900 w-full text-left px-4 py-2 text-sm text-gray-700 z-50"
                      role="menuitem"
                    >
                      Dark
                    </Button>

                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};
