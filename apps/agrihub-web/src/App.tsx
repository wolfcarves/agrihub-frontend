import { Route, Link } from "react-router-dom";

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

import { Outlet } from "react-router-dom";
import ErrorElement from "@routes/common/error";

const App = ReactRouter(
  <>
    <Route
      path="/"
      element={<Link to="/account/login">Go to login</Link>}
      errorElement={<ErrorElement />}
    />

    {/* Account Related */}
    <Route path="/account" element={<AccountLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="profile-completion" element={<ProfileCompletion />} />
      <Route path="final-setup" element={<SetupUsername />} />
      <Route path="forgot-password" element={`forgot-password`} />
      <Route path="reset-password" element={`reset-password`} />
    </Route>

    {/* Questions */}
    <Route path="/" element={<Outlet />}>
      <Route path="questions" element={<div>Question List</div>} />
      <Route path=":username/question" element={<div>Question Slug</div>} />
    </Route>

    {/* Articles */}
    <Route path="/" element={<Outlet />}>
      <Route path="articles" />
      <Route path="article/:title/:slug" />
    </Route>

    {/* Users  */}
    <Route path="/users">
      <Route path=":userId/:username" />
    </Route>
  </>
);

export default App;
