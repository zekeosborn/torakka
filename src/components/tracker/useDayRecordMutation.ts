import type { DayRecord } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../ui/use-toast';
import { addDayRecord, deleteDayRecord } from './tracker-api';

export default function useDayRecordMutation() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const addDayRecordMutation = useMutation({
    mutationFn: addDayRecord,
    onSuccess: (data) => {
      queryClient.setQueryData(['dayRecords'], (oldData: DayRecord[]) => [
        ...oldData,
        data,
      ]);
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Unable to Add Tracking',
        description:
          "Sorry, we couldn't add new tracking. Please try again later.",
      });
    },
  });

  const deleteDayRecordMutation = useMutation({
    mutationFn: deleteDayRecord,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(['dayRecords'], (oldData: DayRecord[]) =>
        oldData.filter((data) => data.id !== variables),
      );
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Unable to Delete Tracking',
        description:
          "Sorry, we couldn't delete this tracking. Please try again later.",
      });
    },
  });

  return { addDayRecordMutation, deleteDayRecordMutation };
}
