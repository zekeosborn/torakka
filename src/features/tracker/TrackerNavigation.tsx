import { Button } from '@/components/ui/button';
import type { Dayjs } from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  date: Dayjs;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export default function TrackerNavigation({
  date,
  onNextMonth,
  onPrevMonth,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <Button size="icon" onClick={onPrevMonth}>
        <ChevronLeft />
      </Button>

      <div className="font-bold">{date.format('MMMM, YYYY')}</div>

      <Button size="icon" onClick={onNextMonth}>
        <ChevronRight />
      </Button>
    </div>
  );
}
