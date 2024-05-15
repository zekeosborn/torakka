import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { Tracker } from '@/components';
import NavBar from './NavBar';

async function HomePage() {
  const session = await auth();

  if (!session) return redirect('/');

  return (
    <>
      <NavBar />
      <main className="px-6">
        <Tracker className="mb-8 mt-[calc(((100dvh-400px)/2)-80px)] tracker:mx-auto" />
      </main>
    </>
  );
}

export default HomePage;
