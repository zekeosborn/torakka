'use client';

import dayjs from 'dayjs';
import { useState } from 'react';

import { Card, CardContent, CardHeader } from '../ui/card';
import TrackerDays from './TrackerDays';
import TrackerNavigation from './TrackerNavigation';
import TrackerWeekLabel from './TrackerWeekLabel';

function Tracker() {
  const [date, setDate] = useState(dayjs());

  const prevMonth = () => setDate(date.subtract(1, 'month'));
  const nextMonth = () => setDate(date.add(1, 'month'));

  return (
    <Card className="w-[400px]">
      <CardHeader className="gap-5">
        <TrackerNavigation
          date={date}
          onPrevMonth={prevMonth}
          onNextMonth={nextMonth}
        />

        <TrackerWeekLabel />
      </CardHeader>

      <CardContent>
        <TrackerDays />
      </CardContent>
    </Card>
  );
}

export default Tracker;
