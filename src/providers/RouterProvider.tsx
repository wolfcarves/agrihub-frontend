import { RouterProvider } from "react-router-dom";
import App from "../App";
import { Toaster } from "react-hot-toast";

const ReactRouterProvider = () => {
  return (
    <>
      <RouterProvider router={App} />
      <Toaster />
    </>
  );
};

export default ReactRouterProvider;
