import { signIn } from '@/auth';
import { Google } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface Props {
  provider: keyof typeof providers;
}

export default function SignInButton({ provider }: Props) {
  const { key, label, icon } = providers[provider];

  return (
    <form
      action={async () => {
        'use server';
        await signIn(key, { redirectTo: '/home' });
      }}
    >
      <Button type="submit" size="lg" className="gap-2">
        {icon}
        <span>Sign In with {label}</span>
      </Button>
    </form>
  );
}

const providers = {
  google: {
    key: 'google',
    label: 'Google',
    icon: <Google />,
  },
};
