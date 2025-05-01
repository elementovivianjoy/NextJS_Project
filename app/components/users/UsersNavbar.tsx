
/* eslint-disable @next/next/no-img-element */
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";
import React, { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";


type NavbarUserProps = {
  user: {
    avatar: string | undefined;
    id: string;
    name: string;
    email: string;
  };
  children?: ReactNode;
};


const UsersNavbar = ({ user, children }: NavbarUserProps) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const { setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <nav className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu toggle */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={menuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger icon */}
                  <svg
                    className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/* Close icon */}
                  <svg
                    className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">{/* Logo and links */}
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  HelloWorld
                </span>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <div className="flex space-x-4">
                    <Link
                      href="/dashboard/user"
                      className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium z-50"
                    >
                      Home
                    </Link>
                    <Link
                      href="#postlist"
                      className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium z-50"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="#team"
                      className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium z-50"
                    >
                      Team
                    </Link>
                    <Link
                      href="#about"
                      className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium z-50"
                    >
                      About
                    </Link>
                    <Link
                      href="#contact"
                      className="text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium z-50"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Profile dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

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


                <div className="relative ml-3">
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.avatar ?? "/default-avatar.png"}
                      alt={user.name}
                    />
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg py-2 ring-1 ring-black ring-opacity-5">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <Link
                        href={`/dashboard/user/profile/${user.id}`}
                        className="block px-4 py-2 text-sm text-indigo-600 hover:bg-gray-100 font-medium"
                      >
                        See My Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center gap-2">
                          <LogOut className="h-4 w-4" />
                          Sign out
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu links */}
          {menuOpen && (
            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link
                  href="/"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/dashboard/user"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blogs
                </Link>
                <Link
                  href="#team"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </Link>
                <Link
                  href="#about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
      <main>{children}</main>

    </>
  );
};

export default UsersNavbar;
