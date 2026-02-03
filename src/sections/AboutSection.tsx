"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "../components/AnimatedCounter";
import SpotlightCard from "../components/SpotlightCard";
import BlurText from "../components/BlurText";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 400, suffix: "+", label: "Hackers" },
  { value: 10, prefix: "+", suffix: "", label: "Sponsors", format: true },
  { value: 24, suffix: "+", label: "Hours of Coding" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1, x: 60 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-8 sm:py-2 lg:py-8 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <h2
                ref={headingRef}
                className="font-display text-[clamp(32px,5vw,56px)] font-bold text-white leading-tight mb-4 sm:mb-6"
                style={{ opacity: 0 }}
              >
                Forge the Future in{" "}
                <span className="gradient-text">24 Hours</span>
              </h2>

              <div
                ref={descRef}
                className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10"
                style={{ opacity: 0 }}
              >
                <BlurText
                  text="Code & Chaos is DCE's premier hackathon bringing together developers, designers, and innovators. Build projects, learn new skills, and compete for exciting prizes."
                  stagger={0.015}
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {stats.map((stat) => (
                  <SpotlightCard
                    key={stat.label}
                    className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5"
                    spotlightColor="rgba(147, 51, 234, 0.2)"
                  >
                    <div className="text-center">
                      <span className="font-display text-[clamp(20px,4vw,40px)] font-bold gradient-text block mb-1 sm:mb-2">
                        {stat.format ? (
                          <AnimatedCounter
                            end={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                          />
                        ) : (
                          <AnimatedCounter
                            end={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                          />
                        )}
                      </span>
                      <span className="font-mono text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">
                        {stat.label}
                      </span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div
              ref={imageRef}
              className="order-1 lg:order-2 relative"
              style={{ opacity: 0 }}
            >
              <div className="relative aspect-[9/8] rounded-2xl sm:rounded-3xl overflow-hidden">
                <div style={{ width: "620px", height: "620px" }}>
                  <iframe
                    src="https://lottie.host/embed/0f5c67aa-6d0d-4cc0-be91-b32708d5c3f3/FKphDnD7x8.lottie"
                    className="w-full h-full border-none"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-purple-600/20 to-red-600/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
