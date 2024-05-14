'use client';

import { signIn } from 'next-auth/react';

import { Google } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface Props {
  provider: keyof typeof providers;
}

function SignInButton({ provider }: Props) {
  const { key, label, icon } = providers[provider];

  return (
    <Button
      size="lg"
      className="gap-2"
      onClick={() => signIn(key, { callbackUrl: '/' })}
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

export default SignInButton;
