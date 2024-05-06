'use client';

import { ChevronLeft, ChevronRight } from '../icons';
import { Button } from '../ui/button';
import { useTracker } from './TrackerProvider';

function TrackerNavigation() {
  const { date, navigatePrevMonth, navigateNextMonth } = useTracker();

  return (
    <div className="flex items-center justify-between">
      <Button size="icon" onClick={navigatePrevMonth}>
        <ChevronLeft />
      </Button>

      <div className="font-bold">{date.format('MMMM, YYYY')}</div>

      <Button size="icon" onClick={navigateNextMonth}>
        <ChevronRight />
      </Button>
    </div>
  );
}

export default TrackerNavigation;
