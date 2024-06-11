'use client';

import {
  QueryClient,
  QueryClientProvider as ReactQueryProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: React.PropsWithChildren) {
  return (
    <ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>
  );
}
