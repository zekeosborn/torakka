import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { Skeleton } from '../ui/skeleton';
import TrackerDay from './TrackerDay';
import { useTracker } from './TrackerProvider';

export default function TrackerDays() {
  const { date, isLoading } = useTracker();
  const days = createDays(date);

  return (
    <div className="grid grid-cols-7 place-items-center gap-y-4">
      {days.map(({ id, day }) => {
        if (!day) return <div key={id} />;
        if (isLoading) return <Skeleton key={id} className="size-9" />;
        return <TrackerDay key={id} day={day} />;
      })}
    </div>
  );
}

function createDays(date: dayjs.Dayjs) {
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
  day: dayjs.Dayjs | null;
}
