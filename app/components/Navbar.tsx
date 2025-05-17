
// /* eslint-disable @next/next/no-img-element */
// "use client";

// import * as React from "react"
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes"
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export const Navbar = () => {
//   const { setTheme } = useTheme();
//   const [dropdownOpen, setDropdownOpen] = React.useState(false);
//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);
//   const [isScrolled, setIsScrolled] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50">
//       <nav className={`border-gray-200 px-4 lg:px-6 ${isScrolled ? "py-1 shadow-md" : "py-3 shadow-sm"
//         } dark:bg-gray-800 bg-white transition-all duration-300`}>
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
//               Hello
//             </span>
//           </Link>

//           {/* Hamburger Toggle (Mobile Only) */}
//           <div className="lg:hidden relative w-full">
//             {/* Hidden Checkbox for menu toggle */}
//             <input
//               id="menu-toggle"
//               className="peer hidden lg:hidden"
//               type="checkbox"
//               aria-label="Toggle menu"
//             />


//             {/* Hamburger Icon */}
//             <label
//               htmlFor="menu-toggle"
//               className="absolute right-4 top-2 z-20 flex flex-col justify-center items-center w-8 h-8 cursor-pointer lg:hidden"
//             >
//               <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all peer-checked:rotate-45 peer-checked:translate-y-1.5"></div>
//               <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1 transition-all peer-checked:opacity-0"></div>
//               <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></div>
//             </label>

//             {/* Mobile Menu (only shown on toggle) */}
//             <div className="peer-checked:flex hidden lg:hidden flex-col mt-12 bg-white dark:bg-gray-800 absolute w-full left-0 top-0 z-10 rounded-lg shadow-md p-4">
//               <Link href="/" className="block py-2 z-50 text-gray-700 dark:text-white">
//                 Home
//               </Link>
//               <Link href="/about" className="block py-2 z-50 text-gray-700 dark:text-gray-300">
//                 About
//               </Link>
//               <Link href="/team" className="block py-2 z-50 text-gray-700 dark:text-gray-300">
//                 Team
//               </Link>
//               <Link href="/contact" className="block py-2 z-50 text-gray-700 dark:text-gray-300">
//                 Contact
//               </Link>
//               <Link
//                 href="/login"
//                 className="block py-2 mt-2 text-white z-50 bg-green-600 hover:bg-gray-500 text-center rounded-md"
//               >
//                 Log in
//               </Link>
//               <Link
//                 href="/register"
//                 className="block py-2 mt-2 text-white z-50 bg-gray-700 hover:bg-gray-500 text-center rounded-md"
//               >
//                 Register
//               </Link>
//             </div>
//           </div>

//           {/* Desktop Navigation Menu */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-6">
//             <Link href="/" className="text-gray-700 dark:text-white z-50">
//               Home
//             </Link>
//             <Link href="#about" className="text-gray-400 hover:text-white z-50">
//               About
//             </Link>
//             <Link href="#team" className="text-gray-400 hover:text-white z-50">
//               Team
//             </Link>
//             <Link href="#contact" className="text-gray-400 hover:text-white z-50">
//               Contact
//             </Link>
//           </div>

//           {/* Desktop Login/Register Buttons */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-4">
//             <Link
//               href="/login"
//               className="text-sm text-white bg-green-600 hover:bg-gray-800 font-medium rounded-lg z-50 px-4 py-2 ml-4"
//             >
//               Log in
//             </Link>
//             <Link
//               href="/register"
//               className="text-sm text-white bg-gray-700 hover:bg-green-700 font-medium z-50 rounded-lg px-4 py-2"
//             >
//               Register
//             </Link>

//             <div className="relative z-50">
//               <Button
//                 onClick={toggleDropdown}
//                 variant="outline"
//                 size="icon"
//                 aria-expanded={dropdownOpen ? "true" : "false"}
//                 className="flex items-center justify-center z-50"
//               >
//                 <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                 <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 <span className="sr-only">Toggle theme</span>
//               </Button>

//               {dropdownOpen && (
//                 <div
//                   className="absolute right-0 z-50 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-white-900 shadow-lg ring-1 ring-black/5 focus:outline-none mt-4"
//                   role="menu"
//                   aria-orientation="vertical"
//                   aria-labelledby="menu-button"
//                 >
//                   <div className="py-1" role="none">
//                     <Button
//                       onClick={() => {
//                         setTheme("light");
//                         setDropdownOpen(false);
//                       }}
//                       className="block bg-white dark:bg-white-900 w-full text-left px-4 py-2 text-sm text-gray-700 z-50 mt-4"
//                       role="menuitem"
//                     >
//                       Light
//                     </Button>
//                     <Button
//                       onClick={() => {
//                         setTheme("dark");
//                         setDropdownOpen(false);
//                       }}
//                       className="block bg-white dark:bg-white-900 w-full text-left px-4 py-2 text-sm text-gray-700 z-50"
//                       role="menuitem"
//                     >
//                       Dark
//                     </Button>

//                   </div>
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };


"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 block px-2 py-1"
  >
    {children}
  </Link>
);

export const Navbar: React.FC = () => {
  const { setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50">
        <nav className="py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">Hello</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  const navClasses = `
    ${isScrolled ? "py-2 backdrop-blur-lg bg-white/75 dark:bg-gray-900/75" : "py-4 bg-white dark:bg-gray-900"}
    border-b border-gray-200 dark:border-gray-700 transition-all duration-300
  `;

  return (
    <header className="sticky top-0 z-50">
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
           
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
                Hello
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#team">Team</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login">
                <Button 
                  variant="ghost"
                  className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button 
                  className="bg-gradient-to-r from-green-500 to-purple-500 text-white hover:opacity-90"
                >
                  Register
                </Button>
              </Link>

              {/* Theme Switcher Dark Mode */}
              <div className="relative">
                <Button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                </Button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg">
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setTheme("light");
                          setDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        Light
                      </button>
                      <button
                        onClick={() => {
                          setTheme("dark");
                          setDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 dark:text-gray-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {dropdownOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {dropdownOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="/">Home</MobileNavLink>
                <MobileNavLink href="#about">About</MobileNavLink>
                <MobileNavLink href="#team">Team</MobileNavLink>
                <MobileNavLink href="#contact">Contact</MobileNavLink>
                <div className="pt-4 space-y-2">
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-purple-500">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
