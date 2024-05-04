import { Card, CardContent, CardHeader } from '../ui/card';
import TrackerDays from './TrackerDays';
import TrackerNavigation from './TrackerNavigation';
import TrackerWeekLabel from './TrackerWeekLabel';

function Tracker() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="gap-5">
        <TrackerNavigation />
        <TrackerWeekLabel />
      </CardHeader>

      <CardContent>
        <TrackerDays />
      </CardContent>
    </Card>
  );
}

export default Tracker;
