"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamProps {
  id?: string;
}

interface TeamMember {
  name: string;
  role: string;
  school: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Vivian Joy O. Elemento",
    role: "BSCS Student",
    school: "Sorsogon State University",
    image: "/images/team-member-1.jpeg",
    socials: {
      facebook: "https://www.facebook.com/vivianjoy.elemento.1/about",
      github: "https://github.com/elementovivianjoy",
    },
  },
  {
    name: "Maurick Jazmin",
    role: "BSCS Student",
    school: "Sorsogon State University",
    image: "/images/team-member-2.jpeg",
    socials: {
      facebook: "https://www.facebook.com/maurick.jazmin.3/about",
      github: "https://github.com/",
    },
  },
  {
    name: "Joan Navarro",
    role: "BSCS Student",
    school: "Sorsogon State University",
    image: "/images/team-member-3.jpg",
    socials: {
      facebook: "https://www.facebook.com/joan.navarro.129357/about",
      github: "https://github.com/joan815/joan815",
    },
  },
  {
    name: "Benedict Hamor",
    role: "BSCS Student",
    school: "Sorsogon State University",
    image: "/images/team-member-4.jpeg",
    socials: {
      facebook: "https://www.facebook.com/micede.ash/about",
      github: "https://github.com/",
    },
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="sm:flex">
        <div className="relative w-full sm:w-2/5">
          <Image
            src={member.image}
            alt={`${member.name}'s profile`}
            fill
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 sm:rounded-l-lg"
            sizes="(max-width: 640px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 sm:w-3/5">
          <div className="space-y-2">
            <motion.h3 
              className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            >
              {member.name}
            </motion.h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {member.role}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {member.school}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex space-x-4">
              {Object.entries(member.socials).map(([platform, url]) => (
                url && <SocialLink key={platform} href={url} platform={platform as SocialPlatform} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

type SocialPlatform = "facebook" | "twitter" | "github" | "dribbble";

const SocialLink: React.FC<{ href: string; platform: SocialPlatform }> = ({ href, platform }) => {
  const icons: Record<SocialPlatform, React.ReactElement> = {
    facebook: (
      <svg 
        className="w-5 h-5 transition-transform duration-300 hover:scale-110" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          fillRule="evenodd" 
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
          clipRule="evenodd" 
        />
      </svg>
    ),
    twitter: (
      <svg 
        className="w-5 h-5 transition-transform duration-300 hover:scale-110" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" 
        />
      </svg>
    ),
    github: (
      <svg 
        className="w-5 h-5 transition-transform duration-300 hover:scale-110" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          fillRule="evenodd" 
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
          clipRule="evenodd" 
        />
      </svg>
    ),
    dribbble: (
      <svg 
        className="w-5 h-5 transition-transform duration-300 hover:scale-110" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          fillRule="evenodd" 
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" 
          clipRule="evenodd" 
        />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
      aria-label={`Visit ${platform} profile`}
    >
      {icons[platform]}
    </a>
  );
};

export const Team: React.FC<TeamProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
