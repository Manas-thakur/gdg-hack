"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Who can participate?',
    answer: 'Any college student with a passion for building! Whether you\'re a beginner or experienced developer, designer, or innovator - everyone is welcome.',
  },
  {
    question: 'Do I need a team?',
    answer: 'You can join solo or form teams of up to 4 members. Don\'t have a team? No worries! We\'ll have team formation sessions at the start of the event.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Nope, completely free! We believe in making hackathons accessible to everyone. Just register and show up ready to build.',
  },
  {
    question: 'What should I bring?',
    answer: 'Bring your laptop, charger, and your creativity! We\'ll provide food, drinks, and a comfortable workspace. Don\'t forget your student ID.',
  },
  {
    question: 'Will there be food?',
    answer: 'Yes! We\'ll provide meals, snacks, and drinks throughout the event. Let us know about any dietary restrictions when you register.',
  },
  {
    question: 'Can I start working on my project before the event?',
    answer: 'No, all coding and design work must start at the hackathon. You can come with ideas and plans, but the actual building happens during the event.',
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      if (faqsRef.current) {
        const items = faqsRef.current.querySelectorAll('.faq-item');
        gsap.fromTo(
          items,
          { opacity: 0, y: 30, x: -20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            scrollTrigger: {
              trigger: faqsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-8 sm:py-12 lg:py-12 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2
            ref={headingRef}
            className="font-display text-[clamp(28px,5vw,56px)] font-bold text-white text-center mb-10 sm:mb-16"
            style={{ opacity: 0 }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <div ref={faqsRef} className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <SpotlightCard
                key={index}
                className="faq-item rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden"
                spotlightColor="rgba(147, 51, 234, 0.1)"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left"
                >
                  <span className="font-display text-base sm:text-lg font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-white/50 flex-shrink-0 transition-transform duration-300 sm:w-5 sm:h-5 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-white/40 text-sm sm:text-base mb-2 sm:mb-3">Still have questions?</p>
            <a
              href="mailto:hello@codeandchaos.dev"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
            >
              Contact us at hello@codeandchaos.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
