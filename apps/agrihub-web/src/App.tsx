import { Route, Navigate } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

import Protect from "@auth/Protect";

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

    {/* Account Related */}
    <Route path="/account" element={<AccountLayout />} errorElement={`Error`}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route
        path="profile-completion"
        element={
          <Protect>
            <ProfileCompletion />
          </Protect>
        }
      />
      <Route
        path="final-setup"
        element={
          <Protect>
            <SetupUsername />
          </Protect>
        }
      />
      <Route path="forgot-password" element={`forgot-password`} />
      <Route path="reset-password" element={`reset-password`} />
    </Route>

    {/* Articles and Questions */}
    <Route path="/feed">
      <Route path="questions" />
      <Route path=":username/question" />

      <Route path="articles" />
      <Route path=":slug/article/:title" />
    </Route>

    {/*For Viewing Own Profile */}
    <Route path="/profile">
      <Route path=":slug" />
      <Route path=":slug/tags" />
    </Route>

    {/*For Viewing Other User */}
    <Route path="/user">
      <Route path=":slug" />
    </Route>
  </>
);

export default App;
