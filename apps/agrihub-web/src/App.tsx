import { Route } from "react-router-dom";

import "./globals.css";

//Routes
import Landing from "@routes/user/landing-page";
import ReactRouter from "@router/router";

const App = ReactRouter(
  <>
    <Route path="/" element={<Landing />} />
  </>
);

export default App;
