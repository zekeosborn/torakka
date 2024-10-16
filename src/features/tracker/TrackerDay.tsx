import type { Dayjs } from 'dayjs';
import StatusButton from './StatusButton';

interface Props {
  day: Dayjs;
}

export default function TrackerDay({ day }: Props) {
  return <StatusButton day={day} />;
}
