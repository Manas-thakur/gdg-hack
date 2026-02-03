"use client";
import { Timeline } from '@/components/ui/timeline';

const data = [
  {
    date : "DAY 1",
    time : "9:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Opening Ceremony</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Kickoff, rules, and team formation
          </p>
        </div>
    )
  },
  {
    date : "DAY 1",
    time : "11:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Hacking Begins</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Start building your projects
          </p>
        </div>
    )
  }
]

export default function ScheduleSection() {
  return (
    <Timeline data={data} />
  );
}
