"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  { name: 'Bacternity', logo: '/sponsors/backternity.svg' },
  { name: 'GitHub', logo: '/sponsors/devfolio.png' },
];

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
        const track = sponsorsRef.current.querySelector<HTMLDivElement>('.carousel-track');
        if (!track) return;

        const totalWidth = track.scrollWidth / 2;

        gsap.set(track, { x: 0 });

        gsap.to(track, {
          x: -totalWidth,
          duration: 25,
          ease: 'linear',
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const SponsorLogo = ({ name, logo, size = 'md' }: { name: string; logo: string; size?: 'lg' | 'md' | 'sm' | 'xs' }) => {
    const sizeClasses = {
      lg: 'w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64',
      md: 'w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48',
      sm: 'w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40',
      xs: 'w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32',
    };

    return (
      <div className={`sponsor-logo ${sizeClasses[size]} flex items-center justify-center`}>
        <img
          src={logo}
          alt={name}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={headingRef}
            className="font-display text-2xl font-bold text-white text-center"
            style={{ opacity: 0 }}
          >
            <span className="text-neutral-200">Chaos Powered By</span>
          </h2>

          <div
            ref={sponsorsRef}
            className="relative overflow-hidden"
          >
            <div className="carousel-track flex gap-12 sm:gap-10 w-max">
              {[...sponsors, ...sponsors].map((s, idx) => (
                <SponsorLogo
                  key={`${s.name}-${idx}`}
                  name={s.name}
                  logo={s.logo}
                  size="md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
