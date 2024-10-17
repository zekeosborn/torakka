import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { $Enums } from '@prisma/client';

interface Props {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onAddDayLog: (status: $Enums.Status) => void;
}

export default function AddDayLogDialog({
  open,
  onOpenChange,
  onAddDayLog,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tracking</DialogTitle>
          <DialogDescription>Hey, how is it going today?</DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-y-2">
          <DialogClose asChild>
            <Button
              variant="destructive"
              onClick={() => onAddDayLog('relapse')}
            >
              Relapse
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button variant="success" onClick={() => onAddDayLog('success')}>
              Success
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
