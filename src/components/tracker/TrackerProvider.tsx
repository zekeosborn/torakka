'use client';

import { type DayRecord } from '@prisma/client';
import dayjs from 'dayjs';
import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
  dayRecords?: DayRecord[];
  skeleton?: boolean;
}

const TrackerContext = createContext<TrackerContext | null>(null);

function TrackerProvider({ children, dayRecords, skeleton }: Props) {
  const [date, setDate] = useState(dayjs());

  const navigatePrevMonth = () => setDate(date.subtract(1, 'month'));
  const navigateNextMonth = () => setDate(date.add(1, 'month'));

  return (
    <TrackerContext.Provider
      value={{
        dayRecords,
        date,
        navigatePrevMonth,
        navigateNextMonth,
        skeleton,
      }}
    >
      {children}
    </TrackerContext.Provider>
  );
}

function useTracker(): TrackerContext {
  const context = useContext(TrackerContext);

  if (!context)
    throw new Error('useTracker must be used within a TrackerProvider.');

  return context;
}

interface TrackerContext {
  dayRecords?: DayRecord[];
  date: dayjs.Dayjs;
  navigatePrevMonth: () => void;
  navigateNextMonth: () => void;
  skeleton?: boolean;
}

export { useTracker };
export default TrackerProvider;
