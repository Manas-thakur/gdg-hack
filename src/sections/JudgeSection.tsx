"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Twitter, Globe } from "lucide-react";
import Image from "next/image";

interface Judge {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  day: 1 | 2;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const judges: Judge[] = [
  // Day 1 Judges
  {
    name: "Yet to be disclosed",
    role: "",
    company: "",
    image: "/judges/coming.avif",
    bio: "",
    day: 1,
    socials: {
      linkedin: "",
      twitter: "",
      website: ""
    },
  },

  // Day 2 Judges
  {
    name: "Divya sharma",
    role: "SDE 2",
    company: "Adobe",
    image: "/judges/divya.jpeg",
    bio: "",
    day: 2,
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Shashank Agarwal",
    role: "Founder/CEO",
    company: "Noveum AI, API Market",
    image: "/judges/shashank.jpeg",
    bio: "",
    day: 2,
    socials: {
      linkedin: "https://www.linkedin.com/in/shashankagarwal2/",
      website: "https://noveum.ai/en",
    },
  },
  {
    name: "Deepanshu Pant",
    role: "Pre-sales consultant",
    company: "Signzy",
    image: "/judges/deepanshu.jpeg",
    bio: "",
    day: 2,
    socials: {
      linkedin: "https://linkedin.com",
      website: "https://aisha.dev",
    },
  },
];

export default function JudgesSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const filteredJudges = judges.filter((judge) => judge.day === activeDay);

  return (
    <section
      id="judges"
      className="relative py-8 sm:py-32 font-display bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Judges
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Industry experts evaluating your innovations across both days
          </p>
        </motion.div>

        {/* Day Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {/* Sliding Background */}
            <motion.div
              className="absolute inset-y-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
              initial={false}
              animate={{
                x: activeDay === 1 ? 0 : "100%",
                width: "50%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                left: "4px",
                right: "4px",
                width: "calc(50% - 4px)",
              }}
            />

            <div className="relative flex">
              <button
                onClick={() => setActiveDay(1)}
                className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  activeDay === 1
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Day 1
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  activeDay === 2
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Day 2
              </button>
            </div>
          </div>
        </motion.div>

        {/* Judges Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          >
            {filteredJudges.map((judge, index) => (
              <motion.div
                key={judge.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[280px]"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={judge.image}
                      alt={judge.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                    {/* Social Links - Appear on Hover */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      {judge.socials.linkedin && (
                        <a
                          href={judge.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-purple-600 transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {judge.socials.twitter && (
                        <a
                          href={judge.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-blue-500 transition-colors"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {judge.socials.website && (
                        <a
                          href={judge.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-pink-600 transition-colors"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">
                        Day {judge.day}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      {judge.name}
                    </h3>
                    <p className="text-sm text-white mb-1">
                      {judge.role}
                    </p>
                    <p className="text-sm text-white mb-3">
                      {judge.company}
                    </p>
                    <p className="text-sm text-neutral-400 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {judge.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
