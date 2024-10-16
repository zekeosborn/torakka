'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getDayLogs } from '@/lib/daylog-api';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import TrackerDays from './TrackerDays';
import TrackerNavigation from './TrackerNavigation';
import TrackerWeek from './TrackerWeek';

interface Props {
  className?: string;
}

export default function Tracker({ className }: Props) {
  const [date, setDate] = useState(dayjs());

  const prevMonth = () => setDate(date.subtract(1, 'month'));
  const nextMonth = () => setDate(date.add(1, 'month'));

  const { isLoading } = useQuery({
    queryKey: ['daylogs'],
    queryFn: getDayLogs,
  });

  return (
    <Card className={cn('max-w-[400px]', className)}>
      <CardHeader className="gap-5">
        <TrackerNavigation
          date={date}
          onPrevMonth={prevMonth}
          onNextMonth={nextMonth}
        />

        <TrackerWeek />
      </CardHeader>

      <CardContent>
        <TrackerDays date={date} loading={isLoading} />
      </CardContent>
    </Card>
  );
}
