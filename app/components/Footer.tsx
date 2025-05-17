import React from "react";

export const Footer = () => {
    const socialIcons = {
        Facebook: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
        ),
        Twitter: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 27-5 27-16a9.8 9.8 0 00-.08-1.57A7.72 7.72 0 0023 3z" />
            </svg>
        ),
        GitHub: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.57 2.34 1.12 2.91.86.09-.65.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.29.1-2.68 0 0 .84-.28 2.75 1.06a9.26 9.26 0 015 0c1.9-1.34 2.74-1.06 2.74-1.06.55 1.39.2 2.42.1 2.68.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.85-4.57 5.1.36.32.69.94.69 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.16.58.67.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
        ),
        Discord: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.466 12.466 0 00-.617-1.25.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.03.027C.533 9.04-.32 13.579.099 18.057a.082.082 0 00.031.056 19.909 19.909 0 006.063 3.087.077.077 0 00.084-.027c.466-.641.883-1.317 1.244-2.02a.077.077 0 00-.041-.106 13.12 13.12 0 01-1.872-.888.077.077 0 01-.008-.129c.125-.094.25-.192.368-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.078.009c.12.099.243.198.37.292a.077.077 0 01-.006.128c-.597.371-1.233.666-1.872.889a.077.077 0 00-.04.105c.36.703.778 1.38 1.244 2.02a.077.077 0 00.084.027 19.888 19.888 0 006.063-3.087.077.077 0 00.031-.056c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.183 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.183 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
            </svg>
        ),
        Dribbble: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.478 2 12c0 5.523 4.48 10 10 10s10-4.477 10-10c0-5.522-4.48-10-10-10zm6.94 6.25a8.01 8.01 0 012.018 5.1c-.26-.06-2.858-.62-5.652-.26-.09-.22-.17-.45-.27-.67-.16-.4-.34-.79-.54-1.16 2.44-.96 4.15-2.64 4.444-3.01zm-1.753-1.437c-.28.36-1.552 1.86-3.91 2.73a20.69 20.69 0 00-2.76-3.99 7.995 7.995 0 016.67 1.26zM8.6 4.877a19.247 19.247 0 013.01 4.42c-3.8 1.02-7.22 1.02-7.64 1.02a8.005 8.005 0 014.63-5.44zM4.06 12.2v-.2c.41 0 4.33 0 8.5-1.2.22.41.42.83.6 1.26.11.26.21.52.3.79-4.56 1.24-6.92 4.38-7.15 4.69a8.01 8.01 0 01-2.25-5.34zm3.53 6.34c.21-.34 2.07-3.11 6.36-4.2 1.02 2.7 1.49 5.28 1.62 6.11a8.002 8.002 0 01-7.98-1.91zm9.17 1.13a25.62 25.62 0 00-1.48-5.71c2.53-.38 4.7.24 4.96.33a8.02 8.02 0 01-3.48 5.38z" />
            </svg>
        ),
    };

    return (
        <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
                {/* Sections */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { title: "Company", links: ['About', 'Careers', 'Brand Center', 'Blog'] },
                        { title: "Help Center", links: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'] },
                        { title: "Legal", links: ['Privacy Policy', 'Licensing', 'Terms & Conditions'] },
                        { title: "Download", links: ['iOS', 'Android', 'Windows', 'MacOS'] },
                    ].map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{section.title}</h2>
                            <ul className="space-y-4">
                                {section.links.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-white transition">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Your Company. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {Object.entries(socialIcons).map(([platform, icon]) => (
                                <a
                                    key={platform}
                                    href="#"
                                    aria-label={platform}
                                    className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
