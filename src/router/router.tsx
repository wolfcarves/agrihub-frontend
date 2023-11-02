import {
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

const ReactRouter = (children: React.ReactNode, parentPath?: number[]) =>
  createBrowserRouter(createRoutesFromElements(children, parentPath));

export default ReactRouter;
