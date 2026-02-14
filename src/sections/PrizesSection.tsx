"use client";
import { motion } from "motion/react";
import { Trophy, Gift, Ticket, Star, Zap, Crown } from "lucide-react";

const mainPrizes = [
  {
    rank: "1st",
    title: "Grand Winner",
    prize: "Rs. 10,000",
    perks: ["Cash Prize", "Swag Kits", "Goodies"],
    icon: Crown,
    color: "from-yellow-500 to-amber-600",
    size: "lg",
  },
  {
    rank: "2nd",
    title: "Runner Up",
    prize: "Rs 5,000",
    perks: ["Cash Prize", "Swag Kits", "Goodies"],
    icon: Trophy,
    color: "from-slate-400 to-slate-600",
    size: "md",
  },
  {
    rank: "3rd",
    title: "Second Runner",
    prize: "Rs 3,000",
    perks: ["Cash Prize", "Swag Kits", "Goodies"],
    icon: Trophy,
    color: "from-orange-700 to-orange-900",
    size: "md",
  },
];

const tickPrizes = [
  {
    title: "Bacternity",
    description: "Most effecient way of using backternity library",
    prize: "Rs 2,000",
    icon: Star,
    color: "from-pink-500 to-rose-600",
    sponsor: "Sponsored by Backternity",
  },
  {
    title: "API Market",
    description: "Best business ready project",
    prize: "Rs 10,000",
    icon: Zap,
    color: "from-cyan-500 to-blue-600",
    sponsor: "Sponsored by Api Market",
  },
];

export default function PrizesSection() {
  return (
    <section id="prizes" className="relative py-12 sm:py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Prizes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Rewards</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Compete for incredible prizes worth over Rs 30000 in cash.
          </p>
        </motion.div>

        {/* Main Prizes - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={prize.rank}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${prize.size === 'lg' ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Rank Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${prize.color} text-white text-sm font-bold mb-6`}>
                  {prize.rank} Place
                </div>

                {/* Prize Amount */}
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {prize.prize}
                </div>
                <div className="text-lg text-neutral-400 mb-6">{prize.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tick Prizes - Special Track Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-2xl font-bold text-white">Track Prizes</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickPrizes.map((prize, index) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                  <div className="relative flex gap-4">
                    <div className="flex-1 items-center justify-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-center text-white">{prize.title}</h4>
                      </div>
                      <p className="text-neutral-400 text-center text-sm mb-3">{prize.description}</p>
                      
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                          {prize.prize}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
