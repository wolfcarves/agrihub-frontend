import { Route, Navigate } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

//Routes
import Login from "@routes/user/login";

const App = ReactRouter(
  <>
    <Route path="/" element={<Navigate to="/account/login" replace />} />

    <Route path="/tour" element={<div>Tour Page</div>} />

    <Route path="/account">
      <Route path="login" element={<Login />} />
      <Route path="verify-email" element={`verify-email`} />
      <Route path="profile-completion" element={`profile-completion`} />
      <Route path="setup-username" element={`setup-username`} />
      <Route path="forgot-password" element={`forgot-password`} />
      <Route path="reset-password" element={`reset-password`} />
    </Route>

    <Route path="/feed">
      <Route path="questions" />
      <Route path=":username/question" />

      <Route path="articles" />
      <Route path="article/:title" />
    </Route>

    <Route path="/profile">
      <Route path=":username" />
      <Route path=":username/tags" />
    </Route>

    <Route path="/user">
      <Route path=":username" />
    </Route>
  </>
);

export default App;
