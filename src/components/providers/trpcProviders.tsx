'use client'
import { ReactNode, useState } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {trpc} from '@/app/_trpc/trpcClient';
import { httpBatchLink } from "@trpc/client";
import { absoluteUrl } from "@/lib/utils";

type trpcProviderProps = {
    children: ReactNode
}

export default function TrpcProvider({children}: trpcProviderProps){
    const [queryClient] = useState(() => new QueryClient);
    const [trpcClient] = useState(() => 
    trpc.createClient({
        links: [
            httpBatchLink({
                url: absoluteUrl('/api/trpc')
            })
        ]
    })
    )

    return(
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
              {children}
          </QueryClientProvider>
        </trpc.Provider>
    )
}