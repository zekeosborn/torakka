import { Logo, ModeToggle } from '@/components';
import Avatar from './Avatar';

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between px-6">
      <Logo />
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Avatar />
      </div>
    </header>
  );
}
