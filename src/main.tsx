import React from "react";
import ReactDOM from "react-dom/client";

import ReduxProvider from "@providers/ReduxProvider";
import QueryClientProvider from "@providers/QueryClientProvider";
import ReactRouterProvider from "@providers/RouterProvider";
import AuthProvider from "@providers/AuthProvider";
import HelmetProvider from "@providers/HelmetProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <ReduxProvider>
        <HelmetProvider>
          <AuthProvider>
            <ReactRouterProvider />
          </AuthProvider>
        </HelmetProvider>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
