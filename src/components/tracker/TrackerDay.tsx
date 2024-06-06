import dayjs from 'dayjs';
import StatusButton from './StatusButton';

interface Props {
  day: dayjs.Dayjs;
}

function TrackerDay({ day }: Props) {
  const isToday = dayjs().isSame(day, 'day');
  return <StatusButton date={day.date()} today={isToday} />;
}

export default TrackerDay;
