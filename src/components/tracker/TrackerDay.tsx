import dayjs, { type Dayjs } from 'dayjs';
import StatusButton from './StatusButton';

interface Props {
  day: Dayjs | null;
}

function TrackerDay({ day }: Props) {
  const isToday = day?.format('DMYYYY') === dayjs().format('DMYYYY');

  return (
    <StatusButton day={day?.date()} today={isToday} dayOutsideMonth={!day} />
  );
}

export default TrackerDay;
