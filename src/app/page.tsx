"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/sections/Navigation';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import TracksSection from '@/sections/TracksSection';
import ScheduleSection from '@/sections/ScheduleSection';
import PrizesSection from '@/sections/PrizesSection';
import SponsorsSection from '@/sections/SponsorsSection';
import FAQSection from '@/sections/FAQSection';
import RegisterSection from '@/sections/RegisterSection';
import ParticleBackground from '@/components/ParticleBackground';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <ScheduleSection />
        <PrizesSection />
        <SponsorsSection />
        <FAQSection />
        <RegisterSection />
      </main>
    </div>
  );
}
