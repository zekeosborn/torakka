'use client';

import { signOut } from 'next-auth/react';

function SignOutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: '/welcome' })}>
      Sign Out
    </button>
  );
}

export default SignOutButton;
