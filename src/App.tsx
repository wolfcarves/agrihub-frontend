import { Route } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

//Layouts
import AccountLayout from "@pages/user/account/_layout";
import QuestionLayout from "@pages/user/question/_layout";
import ArticleLayout from "@pages/user/article/_layout";
import UserProfileLayout from "@pages/user/users/_layout";

//Pages
import Tour from "@pages/user/tour/tour";

import Login from "@pages/user/account/login";
import Signup from "@pages/user/account/signup";
import VerifyEmail from "@pages/user/account/verify-email";
import SetupAccount from "@pages/user/account/setup-account";
import FinalSetup from "@pages/user/account/final-setup";

import Questions from "@pages/user/question/questions";
import QuestionTags from "@pages/user/question/question-tags";
import Question from "@pages/user/question/question";

import Articles from "@pages/user/article/articles";
import Article from "@pages/user/article/article";

//Others
import ErrorElement from "@pages/user/common/error";
import EditProfile from "@pages/user/users/edit-profile";
import MyProfile from "@pages/user/users/my-profile";
import UserProfile from "@pages/user/users/user-profile";

const App = ReactRouter(
  <>
    {/* Tour | Welcome | Landing Page */}
    <Route path="/" element={<Tour />} errorElement={<ErrorElement />} />

    {/* Account Page */}
    <Route path="/account" element={<AccountLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="setup-account" element={<SetupAccount />} />
      <Route path="final-setup" element={<FinalSetup />} />
      <Route path="forgot-password" element={`forgot-password`} />
      <Route path="reset-password" element={`reset-password`} />
    </Route>

    {/* Question Page */}
    <Route path="/" element={<QuestionLayout />}>
      <Route path="questions" element={<Questions />} />
      <Route path="questions/tags" element={<QuestionTags />} />
      <Route
        path="question/:username/:questionId/:questionTitle"
        element={<Question />}
      />
    </Route>

    {/* Article Page */}
    <Route path="/" element={<ArticleLayout />}>
      <Route path="articles" element={<Articles />} />
      <Route path="article/:title/:articleId" element={<Article />} />
    </Route>

    {/* Profile Page  */}
    <Route path="/users" element={<UserProfileLayout />}>
      <Route path=":userId/:username" element={<UserProfile />} />
      <Route path=":userId/me" element={<MyProfile />} />
      <Route path=":userId/me/edit" element={<EditProfile />} />
    </Route>
  </>
);

export default App;
