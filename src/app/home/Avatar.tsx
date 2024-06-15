import { auth } from '@/auth';
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
import SignOutButton from './SignOutButton';

export default async function Avatar() {
  const session = await auth();

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ShadcnAvatar>
            <AvatarImage src={session?.user?.image!} />
            <AvatarFallback>{session?.user?.name![0]}</AvatarFallback>
          </ShadcnAvatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
          <DropdownMenuItem className="w-full cursor-pointer" asChild>
            <AlertDialogTrigger>Sign Out</AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <SignOutConfirmDialog />
    </AlertDialog>
  );
}

function SignOutConfirmDialog() {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Confirm Sign Out</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to sign out?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>
          <SignOutButton />
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
