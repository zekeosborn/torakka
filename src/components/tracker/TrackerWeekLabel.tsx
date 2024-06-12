const weekLabel = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function TrackerWeekLabel() {
  return (
    <div className="grid grid-cols-7 place-items-center">
      {weekLabel.map((label) => (
        <div key={label} className="text-sm font-medium">
          {label}
        </div>
      ))}
    </div>
  );
}
