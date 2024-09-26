'use client';

import { Google } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function SignInButton() {
  return (
    <Button
      size="lg"
      className="gap-2"
      onClick={() => signIn('google', { callbackUrl: '/home' })}
    >
      <Google />
      <span>Sign In with Google</span>
    </Button>
  );
}
