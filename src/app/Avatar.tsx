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

interface Props {
  name: string;
  src: string;
}

function Avatar({ name, src }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ShadcnAvatar>
          <AvatarImage src={src} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </ShadcnAvatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Avatar;
