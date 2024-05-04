import { Button } from '../ui/button';

const days = Array.from({ length: 30 }, (_, i) => i + 1);

function TrackerDays() {
  return (
    <div className="grid grid-cols-7 place-items-center gap-y-4">
      {days.map((day) => (
        <Button key={day} variant="ghost" size="icon" className="font-normal">
          {day}
        </Button>
      ))}
    </div>
  );
}

export default TrackerDays;
