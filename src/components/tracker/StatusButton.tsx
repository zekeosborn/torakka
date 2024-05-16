import { type $Enums } from '@prisma/client';
import { cva } from 'class-variance-authority';
import dayjs, { Dayjs } from 'dayjs';

import { cn } from '@/lib';
import { Button } from '../ui/button';

interface Props {
  day: Dayjs | null;
  onClick?: (day: Dayjs) => void;
  status?: $Enums.Status;
}

function StatusButton({ day, onClick, status }: Props) {
  const isToday = dayjs().isSame(day, 'day');

  const styles = cn(variants({ status }), {
    'text-white hover:text-white': status,
    'font-bold': isToday,
    'text-black hover:text-black': isToday && status,
    'text-primary hover:text-primary': isToday && !status,
    'cursor-default bg-transparent hover:bg-transparent': !day,
  });

  return (
    <Button
      variant="ghost"
      size="icon"
      className={styles}
      onClick={() => day && onClick && onClick(day)}
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
