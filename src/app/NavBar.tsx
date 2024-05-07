import { ModeToggle } from '@/components/theme';

function NavBar() {
  return (
    <nav className="absolute right-5 top-5 flex items-center gap-5">
      <ModeToggle />
      <div className="size-10 rounded-full bg-zinc-300" />
    </nav>
  );
}

export default NavBar;
