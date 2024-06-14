import { $Enums } from '@prisma/client';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

interface Props {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onAddDayRecord: (status: $Enums.Status) => void;
}

export default function AddDayRecordDialog({
  open,
  onOpenChange,
  onAddDayRecord,
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
              onClick={() => onAddDayRecord('relapse')}
            >
              Relapse
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button variant="success" onClick={() => onAddDayRecord('success')}>
              Success
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
