import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import SignInButton from './SignInButton';

export default async function WelcomePage() {
  const session = await auth();

  if (session) return redirect('/home');

  return (
    <div className="grid h-dvh place-items-center">
      <SignInButton provider="google" />
    </div>
  );
}
