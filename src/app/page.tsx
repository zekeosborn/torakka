import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import SignInButton from './SignInButton';

async function WelcomePage() {
  const session = await auth();

  if (session) return redirect('/home');

  return (
    <div className="grid h-dvh place-items-center">
      <SignInButton provider="google" />
    </div>
  );
}

export default WelcomePage;
