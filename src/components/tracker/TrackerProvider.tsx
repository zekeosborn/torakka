'use client';

import dayjs, { type Dayjs } from 'dayjs';
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';

const TrackerContext = createContext<TrackerContext | null>(null);

function TrackerProvider({ children }: PropsWithChildren) {
  const [date, setDate] = useState(dayjs());

  const navigatePrevMonth = () => setDate(date.subtract(1, 'month'));
  const navigateNextMonth = () => setDate(date.add(1, 'month'));

  return (
    <TrackerContext.Provider
      value={{ date, navigatePrevMonth, navigateNextMonth }}
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
  };
}

interface TrackerContext {
  date: Dayjs;
  navigatePrevMonth: () => void;
  navigateNextMonth: () => void;
}

export { useTracker };
export default TrackerProvider;
