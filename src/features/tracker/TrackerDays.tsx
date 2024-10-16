import createDays from '@/lib/create-days';
import type { Dayjs } from 'dayjs';
import TrackerDay from './TrackerDay';

interface Props {
  date: Dayjs;
}

export default function TrackerDays({ date }: Props) {
  const days = createDays(date);

  return (
    <div className="grid grid-cols-7 place-items-center gap-y-4">
      {days.map(({ id, day }) => {
        if (!day) return <div key={id} />;
        return <TrackerDay key={id} day={day} />;
      })}
    </div>
  );
}
