"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "../components/MagneticButton";
import TextScramble from "../components/TextScramble";
import BlurText from "../components/BlurText";
import Link from "next/link";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const stripesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
            from: "random",
          },
          transformOrigin: "bottom",
        },
        0,
      );

      // Title animation - letter by letter with 3D effect
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        tl.fromTo(
          chars,
          { opacity: 0, y: 80, rotateX: -90, filter: "blur(20px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: {
              each: 0.04,
              from: "start",
            },
          },
          0.3,
        );
      }

      // Subtitle blur reveal
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, filter: "blur(15px)", y: 30 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1 },
        0.9,
      );

      // CTAs with stagger
      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
        1.1,
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
            stagger: { each: 0.1, from: "end" },
          },
          1.3,
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const renderCodeText = () => {
    const text = "CODE";
    return text.split("").map((char, i) => (
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
    const text = "& CHAOS";
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block transform-gpu"
        style={{ opacity: 0 }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <main className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col">
        <section
          ref={heroRef}
          id="hero"
          className="relative bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Gradient Stripes Background */}
          <div
            ref={stripesRef}
            className="absolute right-0 w-[100%] lg:w-[50%] gap-1 sm:gap-2 lg:gap-4 pr-4 sm:pr-8 lg:pr-16"
          >
            <video
              width={800}
              height={800}
              src="https://res.cloudinary.com/dmtvg2mj4/video/upload/v1770993625/vid_j4juxn.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-[800px] h-[800px] object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-4 sm:pb-4">
            <div className="max-w-6xl mx-auto">
              {/* Presenter */}
              <div className="mb-4 sm:mb-6">
                <span className="font-mono text-xs sm:text-sm text-white/50 tracking-widest">
                  GDG DCE
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-white/30 tracking-widest ml-2 sm:ml-4">
                  PRESENTS
                </span>
              </div>

              {/* Main Title */}
              <h1
                ref={titleRef}
                className="font-display text-[clamp(48px,10vw,140px)] font-bold leading-[0.9] tracking-[-0.03em] mb-3 sm:mb-4"
              >
                <span className="outline-text">{renderCodeText()}</span>
                <br />
                <span className="text-white">{renderChaosText()}</span>
              </h1>

              {/* Tagline with scramble effect */}
              <p
                ref={subtitleRef}
                className="font-display text-lg sm:text-xl lg:text-2xl text-white/80 mb-4 sm:mb-6"
                style={{ opacity: 0 }}
              >
                <TextScramble
                  text="Where Code Meets Chaos"
                  trigger={true}
                  duration={1500}
                />
              </p>

              {/* Description with blur reveal */}
              <p className="text-white/50 text-sm pt-8 sm:text-base lg:text-lg max-w-lg sm:max-w-xl mb-8 sm:mb-10 leading-relaxed">
                <BlurText
                  text="24 hours of innovation, collaboration, and creation. Join 200+ developers building the future."
                  delay={1.5}
                  stagger={0.02}
                />
              </p>

              {/* CTAs with magnetic effect */}
              <div
                ref={ctaRef}
                className="flex flex-row flex-wrap justify-left gap-3 sm:gap-4 mb-4 sm:mb-2"
              >
                <div className="inline-block rounded-xl bg-gradient-to-r from-purple-600 to-red-600 p-[1.5px]">
                  <MagneticButton
                    className="group font-display px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neutral-950 to-neutral-900 text-neutral-199 rounded-xl flex-row items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    strength={0.0}
                  >
                    <Link
                      className=""
                      href="https://unstop.com/o/X0apVxI?lb=3TzKDrEI&utm_medium=Share&utm_source=vaibhjam4168&utm_campaign=Online_coding_challenge"
                    >
                      Register Now
                    </Link>
                  </MagneticButton>
                </div>
                <MagneticButton
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-display rounded-xl hover:bg-white/5 transition-colors duration-300"
                  strength={0.0}
                  onClick={() =>
                    window.open(
                      "https://unstop.com/o/X0apVxI?lb=3TzKDrEI&utm_medium=Share&utm_source=vaibhjam4168&utm_campaign=Online_coding_challenge",
                      "_blank",
                    )
                  }
                >
                  Learn More
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
