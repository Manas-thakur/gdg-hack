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
import RegisterSection from '@/sections/FooterSection';
import ParticleBackground from '@/components/ParticleBackground';
import SponsorTracksSection from '@/sections/SponsorTracks';

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
      <main className="relative z-10">
        {/* Navigation */}
        <Navigation />
          <HeroSection />
        <SponsorsSection />
        <AboutSection />
        <TracksSection />
        <SponsorTracksSection />
        <ScheduleSection />
        {/*<PrizesSection />*/}
        <FAQSection />
        <RegisterSection />
      </main>
  );
}
