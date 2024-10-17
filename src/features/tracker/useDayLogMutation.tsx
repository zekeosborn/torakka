import { useToast } from '@/hooks/use-toast';
import { addDayLog, deleteDayLog } from '@/lib/daylog-api';
import type DayLog from '@/types/daylog';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDayLogMutation() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const addDayLogMutation = useMutation({
    mutationFn: addDayLog,
    onSuccess: (dayLog) => {
      queryClient.setQueryData(['daylogs'], (dayLogs: DayLog[]) => [
        ...dayLogs,
        dayLog,
      ]);
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Cannot Add New Tracking',
        description:
          'Sorry, we cannot add new tracking right now. Please try again later.',
      });
    },
  });

  const deleteDayLogMutation = useMutation({
    mutationFn: deleteDayLog,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(['daylogs'], (dayLogs: DayLog[]) =>
        dayLogs.filter((dayLog) => dayLog.id !== variables),
      );
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Cannot Delete This Tracking',
        description:
          'Sorry, we cannot delete this tracking right now. Please try again later.',
      });
    },
  });

  return { addDayLogMutation, deleteDayLogMutation };
}
