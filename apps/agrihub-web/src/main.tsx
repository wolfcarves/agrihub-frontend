import React from "react";
import ReactDOM from "react-dom/client";

import ReduxProvider from "@providers/ReduxProvider";
import QueryClientProvider from "@providers/QueryClientProvider";
import ReactRouterProvider from "@providers/RouterProvider";

import AuthProvider from "@providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <ReduxProvider>
        <AuthProvider>
          <ReactRouterProvider />
        </AuthProvider>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
