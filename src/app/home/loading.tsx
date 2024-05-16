import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { Tracker } from '@/components';
import NavBar from './NavBar';

async function loading() {
  const session = await auth();

  if (!session) return redirect('/');

  return (
    <>
      <NavBar />
      <main className="px-6">
        <Tracker
          className="mb-8 mt-[calc(((100dvh-400px)/2)-80px)] tracker:mx-auto"
          skeleton
        />
      </main>
    </>
  );
}

export default loading;
