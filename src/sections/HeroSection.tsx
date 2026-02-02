import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import TextScramble from '../components/TextScramble';
import BlurText from '../components/BlurText';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const stripesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Stripes fade in with wave effect
      tl.fromTo(
        stripesRef.current?.children || [],
        { opacity: 0, scaleY: 0 },
        {
          opacity: 1,
          scaleY: 1,
          duration: 1,
          stagger: {
            each: 0.08,
            from: 'random'
          },
          transformOrigin: 'bottom'
        },
        0
      );

      // Title animation - letter by letter with 3D effect
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        tl.fromTo(
          chars,
          { opacity: 0, y: 80, rotateX: -90, filter: 'blur(20px)' },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: {
              each: 0.04,
              from: 'start'
            }
          },
          0.3
        );
      }

      // Subtitle blur reveal
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, filter: 'blur(15px)', y: 30 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1 },
        0.9
      );

      // CTAs with stagger
      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
        1.1
      );

      // Meta badges with wave
      if (metaRef.current) {
        tl.fromTo(
          metaRef.current.children,
          { opacity: 0, y: 30, x: -20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            stagger: { each: 0.1, from: 'end' }
          },
          1.3
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderCodeText = () => {
    const text = 'CODE';
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="char inline-block transform-gpu"
        style={{ opacity: 0 }}
      >
        {char}
      </span>
    ));
  };

  const renderChaosText = () => {
    const text = '& CHAOS';
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="char inline-block transform-gpu"
        style={{ opacity: 0 }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Stripes Background */}
      <div
        ref={stripesRef}
        className="absolute right-0 top-0 bottom-0 w-[35%] lg:w-[40%] flex items-end justify-end gap-1 sm:gap-2 lg:gap-4 pr-4 sm:pr-8 lg:pr-16"
      >
        {[40, 65, 45, 80, 55, 70, 50].map((height, i) => (
          <div
            key={i}
            className="stripe-animate w-2 sm:w-4 lg:w-8 rounded-t-full"
            style={{
              height: `${height}%`,
              background: `linear-gradient(180deg, #9333EA 0%, #EC4899 ${40 + i * 8}%, #DC2626 100%)`,
              opacity: 0,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl xl:max-w-5xl">
          {/* Presenter */}
          <div className="mb-4 sm:mb-6">
            <span className="font-mono text-xs sm:text-sm text-white/50 tracking-widest">GDG DCE</span>
            <span className="font-mono text-[10px] sm:text-xs text-white/30 tracking-widest ml-2 sm:ml-4">PRESENTS</span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="font-display text-[clamp(48px,10vw,140px)] font-bold leading-[0.9] tracking-[-0.03em] mb-3 sm:mb-4"
          >
            <span className="outline-text">{renderCodeText()}</span>
            <span className="text-white">{renderChaosText()}</span>
          </h1>

          {/* Tagline with scramble effect */}
          <p
            ref={subtitleRef}
            className="font-display text-lg sm:text-xl lg:text-2xl text-white/80 mb-4 sm:mb-6"
            style={{ opacity: 0 }}
          >
            <TextScramble text="Where Code Meets Chaos" trigger={true} duration={1500} />
          </p>

          {/* Description with blur reveal */}
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg sm:max-w-xl mb-8 sm:mb-10 leading-relaxed">
            <BlurText
              text="48 hours of innovation, collaboration, and creation. Join 500+ developers building the future."
              delay={1.5}
              stagger={0.02}
            />
          </p>

          {/* CTAs with magnetic effect */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16">
            <MagneticButton
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-medium rounded-xl flex flex-row items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              strength={0.4}
            >
              Register Now
            </MagneticButton>
            <MagneticButton
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors duration-300"
              strength={0.2}
              onClick={scrollToAbout}
            >
              Learn More
            </MagneticButton>
          </div>

          {/* Meta Badges */}
          <div ref={metaRef} className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6">
            {[
              { icon: Calendar, text: 'FEB 20-21, 2026', color: 'text-purple-400' },
              { icon: MapPin, text: 'DCE CAMPUS', color: 'text-pink-400' },
              { icon: Clock, text: '48 HOURS', color: 'text-red-400' },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <badge.icon size={14} className={`sm:w-[18px] sm:h-[18px] ${badge.color}`} />
                <span className="font-mono text-xs sm:text-sm text-white/70">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={20} className="sm:w-6 sm:h-6 text-white/30" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
