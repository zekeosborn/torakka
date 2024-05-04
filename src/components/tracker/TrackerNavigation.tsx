import { ChevronLeft, ChevronRight } from '../icons';
import { Button } from '../ui/button';

function TrackerNavigation() {
  return (
    <div className="flex items-center justify-between">
      <Button size="icon">
        <ChevronLeft />
      </Button>

      <div className="font-bold">January 1, 2024</div>

      <Button size="icon">
        <ChevronRight />
      </Button>
    </div>
  );
}

export default TrackerNavigation;
