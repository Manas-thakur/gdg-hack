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
          <h1 className='text-4xl font-display font-semibold'>Hacking Starts</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 50 teams arrive and start building their prototypes.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "11:30 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Judgement Start</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Every team must pitch their "Product Plan + Tech Prototype" to our jury.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "2:15 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Round 1 Results</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Declartion of the final Judgement for the first round
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "3:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Team Moves to Round 2</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Only the Top 15 Teams (60 participants) who show real potential will be allowed to stay overnight to finish their product.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "3:00 PM - 4:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Lunch Break</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 15 teams will be given lunch by the organizers
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "4:00 PM - 6:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Mentorship Round</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            The remaining teams will follow a Milestone-Based schedule.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "6:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Hack Period</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 15 teams will continue building their prototypes.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "8:00 PM - 9:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Dinner</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 15 teams will be given dinner by the organizers
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "9:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Hack Period</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 15 teams will continue building their prototypes.
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "12:00 PM - 2:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Night Mentorship Round</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            The remaining teams will follow a Milestone-Based schedule.
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "2:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Hack Period</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 15 teams will continue building their prototypes.
          </p>
        </div>
    )
  },
  {
    date : "FEB 20",
    time : "7:00 AM - 8:30 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Breakfast</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            All 15 teams will be given breakfast by the organizers
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "8:30 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Final Hacking & Submission</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Partcipants have to show there final products to our judges.
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "9:00 AM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Judgement</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            Partcipants have to show there final products to our judges.
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "12:00 PM",
    content : (
      <div>
          <h1 className='text-4xl font-display font-semibold'>Final Result</h1>
          <p className="mb-8 text-xl text-neutral-400 dark:text-neutral-200 py-2">
            With the final judgment all the students will be advised to enter into the closing ceremony.
          </p>
        </div>
    )
  },
  {
    date : "FEB 21",
    time : "1:00 PM",
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
