import { Route } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

//Routes
import Login from "@routes/user/login";
import Home from "@routes/user/home";

const App = ReactRouter(
  <>
    <Route path="/" element={<Login />} />
  </>
);

export default App;
