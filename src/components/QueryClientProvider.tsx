'use client';

import {
  QueryClientProvider as Provider,
  QueryClient,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function QueryClientProvider({
  children,
}: React.PropsWithChildren) {
  return <Provider client={queryClient}>{children}</Provider>;
}
