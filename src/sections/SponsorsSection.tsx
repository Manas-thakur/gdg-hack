"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const sponsors = {
  title: [
    { name: 'Google Developers', logo: 'GD' },
  ],
  gold: [
    { name: 'GitHub', logo: 'GH' },
    { name: 'AWS', logo: 'AWS' },
  ],
  silver: [
    { name: 'Vercel', logo: 'VC' },
    { name: 'MongoDB', logo: 'MG' },
    { name: 'Twilio', logo: 'TW' },
  ],
  partners: [
    { name: 'Figma', logo: 'FG' },
    { name: 'Notion', logo: 'NT' },
    { name: 'Linear', logo: 'LN' },
  ],
};

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);

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

      if (sponsorsRef.current) {
        const logos = sponsorsRef.current.querySelectorAll('.sponsor-logo');
        gsap.fromTo(
          logos,
          { opacity: 0, y: 40, scale: 0.8, rotateY: -30 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sponsorsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const SponsorLogo = ({ logo, size = 'md' }: { name: string; logo: string; size?: 'lg' | 'md' | 'sm' | 'xs' }) => {
    const sizeClasses = {
      lg: 'w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-2xl sm:text-3xl',
      md: 'w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 text-xl sm:text-2xl',
      sm: 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-lg sm:text-xl',
      xs: 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-base sm:text-lg',
    };

    return (
      <div
        className={`sponsor-logo ${sizeClasses[size]} rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group`}
        style={{ opacity: 0 }}
      >
        <span className="font-display font-bold text-white/50 group-hover:text-white group-hover:text-glow transition-all duration-300">
          {logo}
        </span>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={headingRef}
            className="font-display text-[clamp(28px,5vw,56px)] font-bold text-white text-center mb-10 sm:mb-16"
            style={{ opacity: 0 }}
          >
            Our <span className="gradient-text">Sponsors</span>
          </h2>

          <div ref={sponsorsRef} className="space-y-8 sm:space-y-12">
            {/* Title Sponsor */}
            <div className="text-center">
              <span className="font-mono text-[10px] sm:text-xs text-purple-400 tracking-widest uppercase mb-4 sm:mb-6 block">
                Title Sponsor
              </span>
              <div className="flex justify-center">
                {sponsors.title.map((s) => (
                  <SponsorLogo key={s.name} name={s.name} logo={s.logo} size="lg" />
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="text-center">
              <span className="font-mono text-[10px] sm:text-xs text-yellow-500/80 tracking-widest uppercase mb-4 sm:mb-6 block">
                Gold Sponsors
              </span>
              <div className="flex justify-center gap-4 sm:gap-6">
                {sponsors.gold.map((s) => (
                  <SponsorLogo key={s.name} name={s.name} logo={s.logo} size="md" />
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="text-center">
              <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase mb-4 sm:mb-6 block">
                Silver Sponsors
              </span>
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                {sponsors.silver.map((s) => (
                  <SponsorLogo key={s.name} name={s.name} logo={s.logo} size="sm" />
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="text-center">
              <span className="font-mono text-[10px] sm:text-xs text-white/30 tracking-widest uppercase mb-4 sm:mb-6 block">
                Partners
              </span>
              <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                {sponsors.partners.map((s) => (
                  <SponsorLogo key={s.name} name={s.name} logo={s.logo} size="xs" />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-16 text-center">
            <p className="text-white/40 text-sm sm:text-base mb-3 sm:mb-4">Want to sponsor Code & Chaos?</p>
            <MagneticButton
              className="px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 text-white text-sm sm:text-base rounded-xl hover:bg-white/5 transition-colors"
              strength={0.2}
            >
              Become a Sponsor
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
