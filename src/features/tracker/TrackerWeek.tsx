const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function TrackerWeek() {
  return (
    <div className="grid grid-cols-7 place-items-center">
      {week.map((day) => (
        <div key={day} className="text-sm font-medium">
          {day}
        </div>
      ))}
    </div>
  );
}
