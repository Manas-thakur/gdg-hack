"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Star, Zap, Palette } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import SpotlightCard from '../components/SpotlightCard';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const specialPrizes = [
  { icon: Palette, title: 'Best UI/UX', amount: 1000 },
  { icon: Star, title: 'Most Innovative', amount: 1000 },
  { icon: Zap, title: 'Best Use of AI', amount: 1000 },
];

export default function PrizesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const grandPrizeRef = useRef<HTMLDivElement>(null);
  const trackPrizesRef = useRef<HTMLDivElement>(null);
  const specialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        grandPrizeRef.current,
        { opacity: 0, scale: 0.8, y: 80 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grandPrizeRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (trackPrizesRef.current) {
        gsap.fromTo(
          trackPrizesRef.current.children,
          { opacity: 0, y: 50, rotateY: -30 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: trackPrizesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (specialRef.current) {
        gsap.fromTo(
          specialRef.current.children,
          { opacity: 0, y: 30, x: -20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: specialRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prizes"
      className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-red-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2
            ref={headingRef}
            className="font-display text-[clamp(28px,5vw,56px)] font-bold text-white text-center mb-10 sm:mb-16"
            style={{ opacity: 0 }}
          >
            Prize <span className="gradient-text">Pool</span>
          </h2>

          {/* Grand Prize */}
          <div
            ref={grandPrizeRef}
            className="relative mb-6 sm:mb-8"
            style={{ opacity: 0 }}
          >
            <SpotlightCard
              className="p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-900/30 to-red-900/30 border border-purple-500/30 text-center"
              spotlightColor="rgba(147, 51, 234, 0.3)"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center pulse-glow">
                  <Trophy size={32} className="text-white sm:w-10 sm:h-10" />
                </div>
              </div>

              <span className="font-mono text-xs sm:text-sm text-purple-400 tracking-widest uppercase mb-2 sm:mb-4 block">
                Grand Prize
              </span>
              <span className="font-display text-[clamp(40px,8vw,100px)] font-bold gradient-text leading-none block mb-3 sm:mb-4">
                $<AnimatedCounter end={10000} duration={2.5} />
              </span>
              <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-md mx-auto">
                The ultimate prize for the most innovative and well-executed project
              </p>
            </SpotlightCard>
          </div>

          {/* Track Winners */}
          <div
            ref={trackPrizesRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {['Web & Mobile', 'AI & ML', 'Open Innovation'].map((track) => (
              <SpotlightCard
                key={track}
                className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 text-center"
                spotlightColor="rgba(236, 72, 153, 0.15)"
              >
                <span className="font-mono text-[10px] sm:text-xs text-white/40 tracking-widest uppercase mb-2 sm:mb-3 block">
                  {track} Winner
                </span>
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white block">
                  $<AnimatedCounter end={3000} duration={2} />
                </span>
              </SpotlightCard>
            ))}
          </div>

          {/* Special Categories */}
          <div className="text-center mb-4 sm:mb-6">
            <span className="font-mono text-xs sm:text-sm text-white/40 tracking-widest uppercase">
              Special Categories
            </span>
          </div>

          <div
            ref={specialRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {specialPrizes.map((prize) => (
              <div
                key={prize.title}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                style={{ opacity: 0 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                  <prize.icon size={20} className="text-purple-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="font-display text-base sm:text-lg font-bold text-white block">
                    $<AnimatedCounter end={prize.amount} duration={1.5} />
                  </span>
                  <span className="text-white/40 text-xs sm:text-sm">
                    {prize.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 text-center">
            <MagneticButton
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-medium rounded-xl inline-flex items-center gap-2 sm:gap-3"
              strength={0.3}
            >
              Register to Win
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
