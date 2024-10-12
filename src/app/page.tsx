import { Logo } from '@/components';
import SignInButton from './SignInButton';

export default function Welcome() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="flex flex-col items-center gap-14">
        <div>
          <Logo className="mb-1 text-6xl xl:text-7xl" />

          <p className="text-center font-shadows text-xl text-gray-600 xl:text-2xl">
            Addiction Recovery Tracker
          </p>
        </div>

        <SignInButton />
      </div>
    </main>
  );
}
