import React, { useState, useEffect } from "react";
import {
  QueryClientProvider as TanstackProvider,
  QueryClient,
  Hydrate
} from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const QueryClientProvider = (props: {
  children: React.ReactNode;
  state: unknown;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            cacheTime: 60_000,
            retry: 0
          },
          mutations: {
            cacheTime: 60_000,
            retry: 0
          }
        }
      })
  );

  useEffect(() => {
    return () => {
      queryClient.cancelQueries;
    };
  }, []);

  return (
    <TanstackProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Hydrate state={props.state}>{props.children}</Hydrate>
    </TanstackProvider>
  );
};

QueryClientProvider.defaultProps = {
  state: undefined
};

export default QueryClientProvider;
