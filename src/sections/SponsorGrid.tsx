"use client";

import { motion } from "motion/react";
import Image from "next/image";

type SponsorSize = "xs" | "sm" | "md" | "lg" | "xl";

interface Sponsor {
  name: string;
  logo: string;
  href: string;
  size?: SponsorSize;
}

const sponsors: Sponsor[] = [
    { name: "Minimax", logo: "/sponsors/minimax.png", href: "https://www.minimax.io/", size: "md" },
    { name: "Api Market", logo: "/sponsors/api.png", href: "https://api.market/", size: "md" },
    { name: ".xyz", logo: "/sponsors/xyz.png", href: "https://gen.xyz/", size: "md" },
  { name: "Unstop", logo: "/sponsors/unstop.png", href: "https://unstop.com", size: "md" },
  { name: "Backternity", logo: "/sponsors/backternity.svg", href: "https://backternity.dev", size: "md" },
  { name: "Commudle", logo: "/sponsors/commudle.svg", href: "https://www.commudle.com/", size: "md" },
  { name: "DSA Visualizer", logo: "/sponsors/dsa.png", href: "https://dsavisualizer.in", size: "md" },
  { name: "Paradize.space", logo: "/sponsors/paradizeRound.png", href: "https://paradize.space", size: "md" },
  { name: "Wingman", logo: "/sponsors/wingman.png", href: "", size: "md" },
  { name: "Sharp Economy", logo: "/sponsors/sharp.png", href: "https://sharpeconomy.org/", size: "md" },
];

const sizeClasses: Record<SponsorSize, string> = {
  xs: "w-24 h-24 sm:w-28 sm:h-28",
  sm: "w-28 h-28 sm:w-32 sm:h-32",
  md: "w-32 h-32 sm:w-40 sm:h-40",
  lg: "w-40 h-40 sm:w-48 sm:h-48",
  xl: "w-48 h-48 sm:w-56 sm:h-56",
};

export default function SponsorsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="sponsors" className="font-display relative py-12 sm:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Sponsors
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation
          </p>
        </motion.div>

        {/* Sponsors Grid - 4 cols on desktop, 2 on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
        >
          {sponsors.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              {/* Card Container */}
              <div className="relative p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04]">
                {/* Logo Container */}
                <div
                  className={`${sizeClasses[sponsor.size || "md"]} flex items-center justify-center relative`}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2 transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </div>

              {/* Sponsor Name */}
              <span className="mt-4 text-sm text-neutral-400 group-hover:text-white transition-colors duration-300 font-medium">
                {sponsor.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}