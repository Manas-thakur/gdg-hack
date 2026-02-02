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
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-xl mx-auto">
          {/* Heading */}
          <div ref={headingRef} className="text-center mb-8 sm:mb-12" style={{ opacity: 0 }}>
            <h2 className="font-display text-[clamp(32px,6vw,64px)] font-bold text-white mb-3 sm:mb-4">
              Ready to <span className="gradient-text">Code?</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base lg:text-lg">
              <TextScramble text="Register now and secure your spot at Code & Chaos 2025." trigger={true} duration={1000} />
            </p>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-4"
              style={{ opacity: 0 }}
            >
              <SpotlightCard
                className="rounded-xl sm:rounded-2xl overflow-hidden"
                spotlightColor="rgba(147, 51, 234, 0.15)"
              >
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block font-mono text-[10px] sm:text-xs text-white/50 tracking-wider uppercase mb-1.5 sm:mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm sm:text-base placeholder:text-white/30 focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] sm:text-xs text-white/50 tracking-wider uppercase mb-1.5 sm:mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm sm:text-base placeholder:text-white/30 focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] sm:text-xs text-white/50 tracking-wider uppercase mb-1.5 sm:mb-2">
                      College/University
                    </label>
                    <input
                      type="text"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="DCE"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm sm:text-base placeholder:text-white/30 focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>
              </SpotlightCard>

              <MagneticButton
                className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                strength={0.2}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Registering...</span>
                ) : (
                  <>
                    Register for Code & Chaos
                    <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </>
                )}
              </MagneticButton>
            </form>
          ) : (
            <SpotlightCard
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 text-center"
              spotlightColor="rgba(34, 197, 94, 0.2)"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Check size={28} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                You're Registered!
              </h3>
              <p className="text-white/50 text-sm sm:text-base">
                Check your email for confirmation and next steps.
              </p>
            </SpotlightCard>
          )}
        </div>
      </div>

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
