import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { getDayRecords } from './tracker-api';

const TrackerContext = createContext<TrackerContext | null>(null);

export default function TrackerProvider({ children }: PropsWithChildren) {
  const [date, setDate] = useState(dayjs());

  const navigatePrevMonth = () => setDate(date.subtract(1, 'month'));
  const navigateNextMonth = () => setDate(date.add(1, 'month'));

  const { isLoading } = useQuery({
    queryKey: ['dayRecords'],
    queryFn: getDayRecords,
  });

  return (
    <TrackerContext.Provider
      value={{
        date,
        navigatePrevMonth,
        navigateNextMonth,
        isLoading,
      }}
    >
      {children}
    </TrackerContext.Provider>
  );
}

export function useTracker() {
  const context = useContext(TrackerContext);

  if (!context)
    throw new Error('useTracker must be used within a TrackerProvider.');

  return context;
}

interface TrackerContext {
  date: dayjs.Dayjs;
  navigatePrevMonth: () => void;
  navigateNextMonth: () => void;
  isLoading: boolean;
}
