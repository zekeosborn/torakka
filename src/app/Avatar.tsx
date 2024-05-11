import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from '@/components/ui/avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function Avatar() {
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ShadcnAvatar>
            <AvatarImage src="/samurai.jpg" />
            <AvatarFallback>Z</AvatarFallback>
          </ShadcnAvatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Zhoiruddin</DropdownMenuLabel>
          <DropdownMenuItem>
            <AlertDialogTrigger>Sign Out</AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Sign out confirmation dialog */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm sign out</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to sign out?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Sign Out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Avatar;
