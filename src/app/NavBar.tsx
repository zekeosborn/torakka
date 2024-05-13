import Link from 'next/link';

import { ModeToggle } from '@/components';
import Avatar from './Avatar';

function NavBar() {
  return (
    <nav className="flex h-20 items-center justify-between px-6">
      <Link href="/">
        <h1 className="text-xl font-bold uppercase">Torakka</h1>
      </Link>

      <div className="flex items-center gap-5">
        <ModeToggle />
        <Avatar />
      </div>
    </nav>
  );
}

export default NavBar;
