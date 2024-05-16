import dayjs, { type Dayjs } from 'dayjs';

import StatusButton from './StatusButton';
import { useTracker } from './TrackerProvider';

interface Props {
  day: Dayjs | null;
}

function TrackerDay({ day }: Props) {
  const { data } = useTracker();
  const dayData = data?.find(({ date }) => dayjs(date).isSame(day, 'day'));
  return <StatusButton day={day} status={dayData?.status} />;
}

export default TrackerDay;
