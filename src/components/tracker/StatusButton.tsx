import { cva } from 'class-variance-authority';
import dayjs, { Dayjs } from 'dayjs';

import { cn } from '@/lib';
import { Button } from '../ui/button';

interface Props {
  day: Dayjs | null;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (day: Dayjs) => void;
  status?: 'success' | 'relapse';
}

function StatusButton({ day, disabled, loading, onClick, status }: Props) {
  const isToday = day?.format('DMYYYY') === dayjs().format('DMYYYY');

  const styles = cn(variants({ status }), {
    'text-white hover:text-white': status,
    'font-bold': isToday,
    'cursor-default bg-transparent hover:bg-transparent': !day,
    'animate-pulse': loading,
  });

  const handleClick = () => day && !disabled && onClick && onClick(day);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={styles}
      onClick={handleClick}
    >
      {day?.date()}
    </Button>
  );
}

const variants = cva('font-normal', {
  variants: {
    status: {
      success: 'bg-green-500 hover:bg-green-500/90',
      relapse: 'bg-red-500 hover:bg-red-500/90',
    },
  },
});

export default StatusButton;
