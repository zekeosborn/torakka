import { cn } from '@/lib';
import { type DayRecord } from '@prisma/client';
import { Card, CardContent, CardHeader } from '../ui/card';
import TrackerDays from './TrackerDays';
import TrackerNavigation from './TrackerNavigation';
import TrackerProvider from './TrackerProvider';
import TrackerWeekLabel from './TrackerWeekLabel';

interface Props {
  dayRecords?: DayRecord[];
  skeleton?: boolean;
  className?: string;
}

function Tracker({ dayRecords, skeleton, className }: Props) {
  return (
    <TrackerProvider dayRecords={dayRecords} skeleton={skeleton}>
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

export { Tracker };
