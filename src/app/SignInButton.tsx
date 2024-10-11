'use client';

import { Button } from '@/components/ui/button';
import { SiGoogle } from '@icons-pack/react-simple-icons';
import { signIn } from 'next-auth/react';

export default function SignInButton() {
  return (
    <Button
      size="lg"
      className="gap-2"
      onClick={() => signIn('google', { redirectTo: '/home' })}
    >
      <SiGoogle className="size-5" />
      <span>Sign In with Google</span>
    </Button>
  );
}
