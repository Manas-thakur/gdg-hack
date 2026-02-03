"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  date:string;
  time: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-6xl flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-lg font-display font-semibold md:text-6xl mb-4 text-white max-w-6xl">
          The <span className="gradient-text">Schedule</span>
        </h1>
        <p className="text-neutral-400 text-center text-sm md:text-lg max-w-2xl">
          24 Hours of non-stop innovation. From opening ceremony to final awards, every moment is designed to help you create something amazing.
        </p>
      </div>

      <div ref={ref} className="relative w-xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-xl md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <div className="flex flex-col">
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                {item.date}
              </h3>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                {item.time}
              </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="flex flex-col">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.date}
              </h3>
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.time}
              </h3>
              </div>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-pink-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
