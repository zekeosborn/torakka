'use client';

import { SessionProvider } from 'next-auth/react';

function AuthProvider({ children }: React.PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}

export { AuthProvider };
