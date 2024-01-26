import { Route } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

//Layouts
import QuestionLayout from "@pages/user/question/question-layout";
import UserAccountLayout from "@pages/user/account/account-layout";
import ArticleLayout from "@pages/user/article/_layout";
import UserProfileLayout from "@pages/user/users/_layout";
import UserHomeLayout from "@pages/user/home/home-layout";

//Pages
import Home from "./pages/user/home/home";

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
import HelpsLayout from "@pages/user/help/_layout";
import Helps from "@pages/user/help/helps";
import Help from "@pages/user/help/help";
import Policy from "@pages/user/help/policy";
import Terms from "@pages/user/help/terms";

//Admin
import AdminLayout from "@pages/admin/admin/admin-layout";
import AdminLogin from "@pages/admin/admin/login";
import CommunityLayout from "./pages/user/community/community-layout";
import Explore from "@pages/user/community/community-explore";
import Community from "@pages/user/community/community";
import Blog from "./pages/user/blog/blog";
import BlogLayout from "./pages/user/blog/_layout";
import Blogs from "./pages/user/blog/blogs";
import Event from "@pages/user/event/event";
import EventsLayout from "@pages/user/event/_layout";
import Events from "@pages/user/event/events";
import About from "./pages/user/about/about";
import AboutFocus from "./pages/user/about/about-focus";
import AboutInitiatives from "./pages/user/about/about-initiatives";
import AboutLatest from "./pages/user/about/about-latest";

// Providers
import UserLayout from "@pages/user/layout/main-layout";
import AboutLayout from "./pages/user/about/_layout";
import CommunityRegister from "./pages/user/community/community-register";
import FarmApplication from "./pages/admin/farm-application/farm-application";
import FarmApplicationView from "./pages/admin/farm-application/farm-application-view";
import CommunityMain from "./pages/user/community/community-main";

const App = ReactRouter(
  <>
    <Route path="/" element={<UserLayout />} errorElement={<ErrorElement />}>
      {/* Landing Page */}
      <Route path="/" element={<UserHomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* About Page */}
      <Route path="/about" element={<AboutLayout />}>
        <>
          <Route path="" element={<About />} />
          <Route path="our-focus" element={<AboutFocus />} />
          <Route path="initiatives" element={<AboutInitiatives />} />
          <Route path="latest" element={<AboutLatest />} />
        </>
      </Route>

      {/* Question Page */}
      <Route path="/forum" element={<QuestionLayout />}>
        <>
          <Route path="" element={<Questions />} />
          <Route path="tags" element={<QuestionTags />} />
          <Route path="ask" element={<QuestionAsk />} />
          <Route path="question/:username/:questionId" element={<Question />} />
        </>
      </Route>

      {/* Community Page */}
      <Route path="/community" element={<CommunityLayout />}>
        <Route path="" element={<Community />} />
        <Route path="explore" element={<Explore />} />
        <Route path="explore/:id" element={<CommunityMain />} />
        <Route path="register" element={<CommunityRegister />} />
      </Route>

      {/* Article Page */}
      <Route path="/articles" element={<ArticleLayout />}>
        <Route path="" element={<Articles />} />
        <Route path="view/:title/:articleId" element={<Article />} />
      </Route>

      {/* Blog Page */}
      <Route path="/blogs" element={<BlogLayout />}>
        <Route path="" element={<Blogs />} />
        <Route path="view/:blogId" element={<Blog />} />
      </Route>

      {/* Events Page */}
      <Route path="/events" element={<EventsLayout />}>
        <Route path="" element={<Events />} />
        <Route path="view/:eventId" element={<Event />} />
      </Route>

      {/* Help Center Page */}
      <Route path="/helps" element={<HelpsLayout />}>
        <Route path="" element={<Helps />} />
        <Route path=":ref" element={<Help />} />
      </Route>

      {/* Profile Page  */}
      <Route path="/users" element={<UserProfileLayout />}>
        <Route path=":userId/:username" element={<UserProfile />} />
        <Route path=":userId/me" element={<MyProfile />} />
        <Route path=":userId/me/edit" element={<EditProfile />} />
      </Route>

      {/* others */}
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/terms-condition" element={<Terms />} />
    </Route>

    {/* Account Page */}
    <Route path="/account" element={<UserAccountLayout />}>
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
      <Route path="farm/application" element={<FarmApplication />} />
      <Route path="" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminLogin />} />
      <Route path="dashboard" element={<AdminLogin />} />

      {/* Farm Application  */}
      <Route path="farm/application" element={<FarmApplication />} />
      <Route path="farm/application/:id" element={<FarmApplicationView />} />
    </Route>
  </>
);

export default App;
