import { cva } from 'class-variance-authority';
import { type MouseEvent } from 'react';

import { cn } from '@/lib';
import { Button } from '../ui/button';

interface Props {
  animate?: boolean;
  day?: number;
  dayOutsideMonth: boolean;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  status?: 'success' | 'relapse';
  today: boolean;
}

function StatusButton({
  animate,
  day,
  dayOutsideMonth,
  disabled,
  onClick,
  status,
  today,
}: Props) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(variants({ status }), {
        'text-white hover:text-white': status,
        'font-bold': today,
        'text-black hover:text-black': today && status,
        'text-blue-500 hover:text-blue-500': today && !status,
        'cursor-default bg-transparent hover:bg-transparent': dayOutsideMonth,
        'animate-pulse': animate,
      })}
      onClick={(e) => !disabled && !dayOutsideMonth && onClick && onClick(e)}
    >
      {day}
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
