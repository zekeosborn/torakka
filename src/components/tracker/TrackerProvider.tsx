'use client';

import dayjs, { type Dayjs } from 'dayjs';
import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
  skeleton?: boolean;
}

const TrackerContext = createContext<TrackerContext | null>(null);

function TrackerProvider({ children, skeleton }: Props) {
  const [date, setDate] = useState(dayjs());

  const navigatePrevMonth = () => setDate(date.subtract(1, 'month'));
  const navigateNextMonth = () => setDate(date.add(1, 'month'));

  return (
    <TrackerContext.Provider
      value={{ date, navigatePrevMonth, navigateNextMonth, skeleton }}
    >
      {children}
    </TrackerContext.Provider>
  );
}

function useTracker(): TrackerContext {
  const context = useContext(TrackerContext);

  if (!context)
    throw new Error('useTracker must be used within a TrackerProvider.');

  return {
    date: context.date,
    navigatePrevMonth: context.navigatePrevMonth,
    navigateNextMonth: context.navigateNextMonth,
    skeleton: context.skeleton,
  };
}

interface TrackerContext {
  date: Dayjs;
  navigatePrevMonth: () => void;
  navigateNextMonth: () => void;
  skeleton?: boolean;
}

export { useTracker };
export default TrackerProvider;
