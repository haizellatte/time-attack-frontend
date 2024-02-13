"use client";

import ChildrenType from "@/types/ChildrenType";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();
function ReactQueryProvider({ children }: ChildrenType) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
