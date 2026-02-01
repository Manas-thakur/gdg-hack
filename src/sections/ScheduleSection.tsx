import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../components/BlurText';

gsap.registerPlugin(ScrollTrigger);

const scheduleEvents = [
  { day: 'Day 1', date: 'Mar 15', time: '9:00 AM', title: 'Opening Ceremony', description: 'Kickoff, rules, and team formation' },
  { day: 'Day 1', date: 'Mar 15', time: '11:00 AM', title: 'Hacking Begins', description: 'Start building your projects' },
  { day: 'Day 2', date: 'Mar 16', time: '10:00 AM', title: 'Workshops', description: 'Learn from industry experts' },
  { day: 'Day 2', date: 'Mar 16', time: '8:00 PM', title: 'Midnight Checkpoint', description: 'Progress review and snacks' },
  { day: 'Day 3', date: 'Mar 17', time: '10:00 AM', title: 'Project Submission', description: 'Submit your projects' },
  { day: 'Day 3', date: 'Mar 17', time: '2:00 PM', title: 'Judging & Awards', description: 'Final demos and prize ceremony' },
];

export default function ScheduleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 0.5,
          },
        }
      );

      eventsRef.current.forEach((event, i) => {
        if (event) {
          gsap.fromTo(
            event,
            { opacity: 0, x: 50, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.6,
              delay: i * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: event,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          const dot = event.querySelector('.timeline-dot');
          if (dot) {
            gsap.fromTo(
              dot,
              { scale: 0, rotate: -180 },
              {
                scale: 1,
                rotate: 0,
                duration: 0.5,
                delay: i * 0.1 + 0.2,
                ease: 'back.out(2)',
                scrollTrigger: {
                  trigger: event,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Heading */}
            <div ref={headingRef} className="lg:col-span-4" style={{ opacity: 0 }}>
              <h2 className="font-display text-[clamp(28px,5vw,56px)] font-bold text-white mb-3 sm:mb-4">
                The <span className="gradient-text">Schedule</span>
              </h2>
              <div className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed">
                <BlurText 
                  text="Three days of non-stop innovation. From opening ceremony to final awards, every moment is designed to help you create something amazing."
                  stagger={0.012}
                />
              </div>

              <div className="mt-6 sm:mt-8 hidden lg:block">
                <div className="w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-purple-600 to-red-600" />
              </div>
            </div>

            {/* Right - Timeline */}
            <div ref={timelineRef} className="lg:col-span-8 relative">
              {/* Timeline line */}
              <div
                ref={lineRef}
                className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-[2px] timeline-line origin-top"
                style={{ transform: 'scaleY(0)' }}
              />

              <div className="space-y-4 sm:space-y-6">
                {scheduleEvents.map((event, index) => (
                  <div
                    key={event.title}
                    ref={(el) => { eventsRef.current[index] = el; }}
                    className="relative pl-10 sm:pl-12 group"
                    style={{ opacity: 0 }}
                  >
                    {/* Dot */}
                    <div className="timeline-dot absolute left-0 top-3 sm:top-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center z-10 group-hover:border-pink-500 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gradient-to-br from-purple-500 to-red-500" />
                    </div>

                    {/* Card */}
                    <div className="p-4 sm:p-5 lg:p-6 rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <span className="font-mono text-[10px] sm:text-xs text-purple-400 tracking-wider uppercase">
                          {event.day}
                        </span>
                        <span className="text-white/20 hidden sm:inline">•</span>
                        <span className="font-mono text-[10px] sm:text-xs text-white/50">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-purple-300 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-white/40 text-xs sm:text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
