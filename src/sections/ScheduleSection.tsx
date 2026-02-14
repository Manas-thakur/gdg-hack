"use client";
import { Timeline } from '@/components/ui/timeline';

const data = [
  {
    date : "FEB 18",
    time : "12:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Online Round</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            We will shortlist the Top 50 Teams (200 students)
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "9:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Hacking Begins</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 50 teams arrive and start building their prototypes.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "11:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>First Elimination</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Every team must pitch their "Product Plan + Tech Prototype" to our jury.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "3:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Mentoring Sessions Starts</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            The remaining teams will follow a Milestone-Based schedule.
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "9:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>JUDGEMENT</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Partcipants have to show there final products to our judges.
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "11:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Closing Ceremony</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            With the final judgment and winners code and chaos will be concluded.
          </p>
        </div>
    )
  },
]

export default function ScheduleSection() {
  return (
    <Timeline data={data} />
  );
}
