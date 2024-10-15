import Day from '@/types/day';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

export default function createDays(date: dayjs.Dayjs) {
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
