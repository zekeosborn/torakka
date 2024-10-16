import Logo from '@/components/Logo';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import ProfileMenu from './ProfileMenu';

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between px-6">
      <Logo />

      <div className="flex items-center gap-5">
        <ThemeToggle />
        <ProfileMenu />
      </div>
    </header>
  );
}
