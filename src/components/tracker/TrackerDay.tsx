import { type DayRecord } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import StatusButton from './StatusButton';

interface Props {
  day: dayjs.Dayjs;
}

export default function TrackerDay({ day }: Props) {
  const queryClient = useQueryClient();

  const isToday = dayjs().isSame(day, 'day');

  const dayRecords = queryClient.getQueryData<DayRecord[]>(['dayRecords']);
  const dayRecord = dayRecords?.find((dayRecord) =>
    dayjs(dayRecord.day).isSame(day, 'day'),
  );

  return (
    <StatusButton
      date={day.date()}
      today={isToday}
      variant={dayRecord?.status}
    />
  );
}
