import { cn } from '@/lib';

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <h1
      className={cn(
        'font-shadows text-xl font-bold uppercase tracking-widest text-primary',
        className,
      )}
    >
      Torakka
    </h1>
  );
}
