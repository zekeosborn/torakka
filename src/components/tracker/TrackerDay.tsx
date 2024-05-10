import { type Dayjs } from 'dayjs';
import StatusButton from './StatusButton';

interface Props {
  day: Dayjs | null;
}

function TrackerDay({ day }: Props) {
  return <StatusButton day={day} />;
}

export default TrackerDay;
