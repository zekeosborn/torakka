import { Card, CardContent, CardHeader } from '../ui/card';
import TrackerDays from './TrackerDays';
import TrackerNavigation from './TrackerNavigation';
import TrackerProvider from './TrackerProvider';
import TrackerWeekLabel from './TrackerWeekLabel';

function Tracker() {
  return (
    <TrackerProvider>
      <Card className="w-[400px]">
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

export default Tracker;
