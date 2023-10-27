import { Route, Navigate } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

//Layouts
import AccountLayout from "@routes/user/account/account-layout";

//Routes
import Login from "@routes/user/account/login";
import Signup from "@routes/user/account/signup";
import VerifyEmail from "@routes/user/account/verify-email";
import ProfileCompletion from "@routes/user/account/profile-completion";
import SetupUsername from "@routes/user/account/final-setup";

const App = ReactRouter(
  <>
    <Route path="/" element={<Navigate to="/account/login" replace />} />

    <Route path="/tour" element={<div>Tour Page</div>} />

    <Route path="/account" element={<AccountLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="profile-completion" element={<ProfileCompletion />} />
      <Route path="final-setup" element={<SetupUsername />} />
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
