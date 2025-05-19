"use client";

import { Moon, Sun, LogOut, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import React, { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  const { setTheme } = useTheme();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const navLinks = [
    { href: "/dashboard/user/", label: "Home" },
    { href: "#postlist", label: "Posts" },
    { href: "#team", label: "Team" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg shadow-sm border-b border-zinc-200 dark:border-zinc-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 items-center h-16">
              <div className="flex items-center space-x-2">
                <Link href="/dashboard/user/">
                  <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                    <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Hello
                    </span>
                  </motion.div>
                </Link>
              </div>

              {/* Desktop nav */}
              <div className="hidden md:flex justify-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="flex justify-end items-center space-x-4">
                <div className="relative">
                  <Button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                  </Button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-36 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xl"
                      >
                        {["light", "dark"].map((theme) => (
                          <button
                            key={theme}
                            onClick={() => {
                              setTheme(theme);
                              setDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-sm text-left text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
                          >
                            {theme}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Avatar Dropdown */}
                <div className="relative hidden md:block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="flex items-center"
                  >
                    <Image
                      src={user.avatar ?? "/default-avatar.png"}
                      alt={user.name}
                      className="h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-800"
                      width={36}
                      height={36}
                    />
                  </motion.button>
                  <AnimatePresence>
                    {profileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-64 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xl"
                      >
                        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
                          <p className="text-sm font-semibold text-zinc-900 dark:text-white">{user.name}</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">{user.email}</p>
                        </div>
                        <Link
                          href={`/dashboard/user/profile/${user.id}`}
                          className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        >
                          View Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden">
                  <Button variant="ghost" size="icon" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                    {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileNavOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-zinc-200 dark:border-zinc-700"
              >
                <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{user.email}</p>
                  <Link
                    href={`/dashboard/user/profile/${user.id}`}
                    className="block mt-2 text-sm text-purple-600 dark:text-purple-400"
                  >
                    View Profile
                  </Link>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-3 py-2 mt-2 text-base text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default UsersNavbar;
