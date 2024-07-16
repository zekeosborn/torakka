import { auth } from '@/auth';
import { Logo } from '@/components';
import { redirect } from 'next/navigation';
import SignInButton from './SignInButton';

export default async function WelcomePage() {
  const session = await auth();

  if (session) return redirect('/home');

  return (
    <div className="grid h-dvh place-items-center">
      <div className="flex flex-col items-center gap-14 md:gap-16">
        <Logo className="text-6xl md:text-7xl" />
        <SignInButton provider="google" />
      </div>
    </div>
  );
}
