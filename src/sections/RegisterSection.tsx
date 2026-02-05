"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Twitter, Instagram, Linkedin, MessageCircle, Check } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import TextScramble from '../components/TextScramble';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

export default function RegisterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', college: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="register"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Footer */}
      <footer className="relative z-10 mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Logo */}
              <div className="flex flex-col items-center md:items-start">
                <span className="font-display text-xl sm:text-2xl font-bold gradient-text">CODE & CHAOS</span>
                <span className="font-mono text-[10px] sm:text-xs text-white/40">Presented by GDG DCE</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: MessageCircle, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <span className="font-mono text-[10px] sm:text-xs text-white/30">
                © 2025 Code & Chaos. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
