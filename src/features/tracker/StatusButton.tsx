import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { $Enums } from '@prisma/client';
import dayjs from 'dayjs';

interface Props {
  day: dayjs.Dayjs;
  variant?: Variant;
  onClick?: () => void;
}

export default function StatusButton({ day, variant, onClick }: Props) {
  const isToday = dayjs().isSame(day, 'day');

  return (
    <Button
      variant={variantMap[variant ?? 'default']}
      size="icon"
      onClick={onClick}
    >
      <div
        className={cn('font-normal', {
          'grid size-6 place-items-center rounded-full bg-primary text-white':
            isToday,
        })}
      >
        {day.date()}
      </div>
    </Button>
  );
}

type Variant = $Enums.Status | 'default';
type VariantValue = 'ghost' | 'success' | 'destructive';

const variantMap: Record<Variant, VariantValue> = {
  default: 'ghost',
  success: 'success',
  relapse: 'destructive',
};
