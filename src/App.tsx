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
import QuestionAsk from "@pages/user/question/question-ask";

//Admin
import AdminLayout from "@pages/admin/admin/admin-layout";
import AdminLogin from "@pages/admin/admin/login";
import CommunityLayout from "./pages/user/community/_layout";
import Explore from "@pages/user/community/community-explore";
import Community from "@pages/user/community/community";
import Blog from "./pages/user/blog/blog";
import BlogLayout from "./pages/user/blog/_layout";
import Blogs from "./pages/user/blog/blogs";
import About from "./pages/user/about/about";
import AboutFocus from "./pages/user/about/about-focus";
import AboutInitiatives from "./pages/user/about/about-initiatives";
import AboutLatest from "./pages/user/about/about-latest";
import LandingPage from "./pages/user/home/landing-page";

const App = ReactRouter(
  <>
    {/* Tour | Welcome | Landing Page */}
    <Route path="/" element={<Tour />} errorElement={<ErrorElement />} />

    {/* Landing Page */}
    <Route path="/" element={<LandingPage />} />

    {/* About Page */}
    <Route path="/">
      <Route path="about" element={<About />} />
      <Route path="our-focus" element={<AboutFocus />} />
      <Route path="initiatives" element={<AboutInitiatives />} />
      <Route path="latest" element={<AboutLatest />} />
    </Route>

    {/* Account Page */}
    <Route path="/account" element={<AccountLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="setup-account" element={<SetupAccount />} />
      <Route path="final-setup" element={<FinalSetup />} />
      {/*<Route path="forgot-password" element={`forgot-password`} />
      <Route path="reset-password" element={`reset-password`} />*/}
    </Route>

    <Route path="/admin" element={<AdminLayout />}>
      <Route path="login" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminLogin />} />
      <Route path="approve-farmer" element={<AdminLogin />} />
      <Route path="" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminLogin />} />
    </Route>

    {/* Question Page */}
    <Route path="/forums" element={<QuestionLayout />}>
      <Route path="list" element={<Questions />} />
      <Route path="tags" element={<QuestionTags />} />
      <Route path="ask" element={<QuestionAsk />} />
      <Route path="question/:username/:questionId" element={<Question />} />
    </Route>

    {/* Community Page */}
    <Route path="/community" element={<CommunityLayout />}>
      <Route path="my-community" element={<Community />} />
      <Route path="explore" element={<Explore />} />
    </Route>

    {/* Article Page */}
    <Route path="/article/" element={<ArticleLayout />}>
      <Route path="list" element={<Articles />} />
      <Route path="view/:title/:articleId" element={<Article />} />
    </Route>

    {/* Blog Page */}
    <Route path="/blog/" element={<BlogLayout />}>
      <Route path="list" element={<Blogs />} />
      <Route path="view/:blogId" element={<Blog />} />
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
