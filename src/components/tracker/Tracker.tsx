'use client';

import { cn } from '@/lib';
import { Card, CardContent, CardHeader } from '../ui/card';
import TrackerDays from './TrackerDays';
import TrackerNavigation from './TrackerNavigation';
import TrackerProvider from './TrackerProvider';
import TrackerWeekLabel from './TrackerWeekLabel';

interface Props {
  className?: string;
}

export function Tracker({ className }: Props) {
  return (
    <TrackerProvider>
      <Card className={cn('w-full max-w-[400px]', className)}>
        <CardHeader className="gap-5">
          <TrackerNavigation />
          <TrackerWeekLabel />
        </CardHeader>
        <CardContent>
          <TrackerDays />
        </CardContent>
      </Card>
    </TrackerProvider>
  );
}
