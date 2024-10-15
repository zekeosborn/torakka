import type { Dayjs } from 'dayjs';

export default interface Day {
  id: string;
  day: Dayjs | null;
}
