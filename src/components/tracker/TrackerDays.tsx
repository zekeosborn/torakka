'use client';

import dayjs, { Dayjs } from 'dayjs';
import { nanoid } from 'nanoid';

import { Skeleton } from '../ui/skeleton';
import TrackerDay from './TrackerDay';
import { useTracker } from './TrackerProvider';

function TrackerDays() {
  const { date, skeleton } = useTracker();
  const days = createDays(date);

  return (
    <div className="grid grid-cols-7 place-items-center gap-y-4">
      {days.map(({ id, day }) => {
        if (skeleton && !day) return <div key={id} />;
        if (skeleton) return <Skeleton key={id} className="size-9" />;
        return <TrackerDay key={id} day={day} />;
      })}
    </div>
  );
}

function createDays(date: Dayjs) {
  const daysInMonth = date.daysInMonth();
  const firstDayOfMonth = date.startOf('month').day();

  const days: Day[] = Array.from({ length: daysInMonth }, (_, i) => ({
    id: nanoid(),
    day: dayjs(date).set('date', i + 1),
  }));

  const filler: Day[] = Array.from({ length: firstDayOfMonth }, () => ({
    id: nanoid(),
    day: null,
  }));

  return [...filler, ...days];
}

interface Day {
  id: string;
  day: Dayjs | null;
}

export default TrackerDays;
