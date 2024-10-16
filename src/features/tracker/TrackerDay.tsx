import type DayLog from '@/types/daylog';
import { useQueryClient } from '@tanstack/react-query';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import StatusButton from './StatusButton';

interface Props {
  day: Dayjs;
}

export default function TrackerDay({ day }: Props) {
  const queryClient = useQueryClient();

  // retrieve day log for corresponding day
  const dayLogs = queryClient.getQueryData<DayLog[]>(['daylogs']);
  const dayLog = dayLogs?.find((dayLog) =>
    dayjs(dayLog.day).isSame(day, 'day'),
  );

  return <StatusButton day={day} variant={dayLog?.status} />;
}
