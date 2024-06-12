'use client';

import { Google } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

interface Props {
  provider: keyof typeof providers;
}

export default function SignInButton({ provider }: Props) {
  const { key, label, icon } = providers[provider];

  return (
    <Button
      size="lg"
      className="gap-2"
      onClick={() => signIn(key, { callbackUrl: '/home' })}
    >
      {icon}
      <span>Sign In with {label}</span>
    </Button>
  );
}

const providers = {
  google: {
    key: 'google',
    label: 'Google',
    icon: <Google />,
  },
};
