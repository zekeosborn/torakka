import type DayLog from '@/types/daylog';
import { $Enums } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
import AddDayLogDialog from './AddDayLogDialog';
import StatusButton from './StatusButton';
import useDayLogMutation from './useDayLogMutation';

interface Props {
  day: Dayjs;
}

export default function TrackerDay({ day }: Props) {
  const queryClient = useQueryClient();
  const { addDayLogMutation, deleteDayLogMutation } = useDayLogMutation();
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);

  // retrieve day log for corresponding day
  const dayLogs = queryClient.getQueryData<DayLog[]>(['daylogs']);
  const dayLog = dayLogs?.find((dayLog) =>
    dayjs(dayLog.day).isSame(day, 'day'),
  );

  const addDayLog = (status: $Enums.Status) => {
    addDayLogMutation.mutate({ day: day.toISOString(), status });
  };

  const mutateDayLog = () => {
    if (dayLog) return deleteDayLogMutation.mutate(dayLog.id);
    setAddDialogOpen(true);
  };

  if (addDayLogMutation.isPending)
    return (
      <StatusButton day={day} variant={addDayLogMutation.variables.status} />
    );

  if (deleteDayLogMutation.isPending) return <StatusButton day={day} />;

  return (
    <>
      <StatusButton day={day} variant={dayLog?.status} onClick={mutateDayLog} />

      <AddDayLogDialog
        open={isAddDialogOpen}
        onOpenChange={setAddDialogOpen}
        onAddDayLog={addDayLog}
      />
    </>
  );
}
