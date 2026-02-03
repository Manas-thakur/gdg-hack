"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Brain, Rocket, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import GlitchText from '../components/GlitchText';

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  {
    icon: Globe,
    title: 'Web & Mobile',
    description: 'Build the next generation of web and mobile applications. From responsive websites to cross-platform apps.',
    color1: 'from-purple-600 to-purple-400',
    color: 'from-neutral-900 to-neutral-600',
    gradient: 'rgba(147, 51, 234, 0.2)',

    points : ["Proper Deployment", ""],
  },
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Create intelligent solutions using artificial intelligence. Build chatbots, computer vision, or ML models.',
    color: 'from-neutral-900 to-neutral-600',
    gradient: 'rgba(236, 72, 153, 0.2)',
  },
  {
    icon: Rocket,
    title: 'Open Innovation',
    description: 'No limits. Build anything that solves real problems. Hardware, IoT, blockchain - your imagination is the limit.',
    color1: 'from-red-600 to-red-400',
    color: 'from-neutral-900 to-neutral-600',
    gradient: 'rgba(220, 38, 38, 0.2)',
  },
];

export default function SponsorTracksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [, setHoveredIndex] = useState<number | null>(null);

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

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 80, rotateX: 25 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              delay: i * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    gsap.to(card, {
      rotateX: -rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });
    setHoveredIndex(null);
  };

  return (
    <section
      ref={sectionRef}
      id="tracks"
      className="relative pb-16 pt-8 sm:pb-24 lg:pb-16 bg-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2
            ref={headingRef}
            className="font-display text-3xl font-bold text-white text-left mb-4 sm:mb-8"
            style={{ opacity: 0 }}
          >
            Sponsored Tracks
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 perspective-1000">
            {tracks.map((track, index) => (
              <div
                key={track.title}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="relative group"
                style={{ 
                  opacity: 0,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <SpotlightCard
                  className="h-full p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5"
                  spotlightColor={track.gradient}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110`}
                      style={{
                        animation: `float 4s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      <track.icon size={24} className="text-white sm:w-7 sm:h-7" />
                    </div>

                    {/* Title with glitch effect */}
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                      <GlitchText text={track.title} />
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                      {track.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-white/40 group-hover:text-purple-400 transition-colors">
                      <span className="font-mono text-xs sm:text-sm">Judging Criteria</span>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
