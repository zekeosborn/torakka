import { cn } from '@/lib';
import { $Enums } from '@prisma/client';
import { Button } from '../ui/button';

interface Props {
  date: number;
  today: boolean;
  variant?: Variant;
  onClick?: () => void;
}

export default function StatusButton({ date, today, variant, onClick }: Props) {
  return (
    <Button
      variant={variantMap[variant ?? 'default']}
      size="icon"
      onClick={onClick}
    >
      <div
        className={cn('font-normal', {
          'grid size-6 place-items-center rounded-full bg-primary text-white':
            today,
        })}
      >
        {date}
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
