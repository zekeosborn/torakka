'use client';

import { type Dayjs } from 'dayjs';

import { ChevronLeft, ChevronRight } from '../icons';
import { Button } from '../ui/button';

interface Props {
  date: Dayjs;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function TrackerNavigation({ date, onPrevMonth, onNextMonth }: Props) {
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

export default TrackerNavigation;
