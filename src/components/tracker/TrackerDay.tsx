import type { DayRecord } from '@/types';
import { $Enums } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import AddDayRecordDialog from './AddDayRecordDialog';
import StatusButton from './StatusButton';
import useDayRecordMutation from './useDayRecordMutation';

interface Props {
  day: dayjs.Dayjs;
}

export default function TrackerDay({ day }: Props) {
  const queryClient = useQueryClient();
  const { addDayRecordMutation, deleteDayRecordMutation } =
    useDayRecordMutation();

  const [isAddingDayRecord, setAddingDayRecord] = useState(false);

  const isToday = dayjs().isSame(day, 'day');
  const dayRecords = queryClient.getQueryData<DayRecord[]>(['dayRecords']);
  const dayRecord = dayRecords?.find((dayRecord) =>
    dayjs(dayRecord.day).isSame(day, 'day'),
  );

  const addDayRecord = (status: $Enums.Status) => {
    addDayRecordMutation.mutate({ day: day.toISOString(), status });
  };

  const updateDayRecord = () => {
    if (dayRecord) return deleteDayRecordMutation.mutate(dayRecord.id);
    setAddingDayRecord(true);
  };

  if (addDayRecordMutation.isPending)
    return (
      <StatusButton
        date={day.date()}
        today={isToday}
        variant={addDayRecordMutation.variables.status}
      />
    );

  if (deleteDayRecordMutation.isPending)
    return <StatusButton date={day.date()} today={isToday} />;

  return (
    <>
      <StatusButton
        date={day.date()}
        today={isToday}
        variant={dayRecord?.status}
        onClick={updateDayRecord}
      />

      <AddDayRecordDialog
        open={isAddingDayRecord}
        onOpenChange={setAddingDayRecord}
        onAddDayRecord={addDayRecord}
      />
    </>
  );
}
