import dayjs from 'dayjs';
import StatusButton from './StatusButton';
import { useTracker } from './TrackerProvider';

interface Props {
  day: dayjs.Dayjs;
}

function TrackerDay({ day }: Props) {
  const { dayRecords } = useTracker();
  const isToday = dayjs().isSame(day, 'day');

  const dayData = dayRecords?.find((dayRecord) =>
    dayjs(dayRecord.day).isSame(day, 'day'),
  );

  return (
    <StatusButton
      date={day.date()}
      today={isToday}
      variant={dayData?.status}
      onClick={() => console.log(day)}
    />
  );
}

export default TrackerDay;
