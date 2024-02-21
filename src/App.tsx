import { Route } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

//Layouts
import QuestionLayout from "@pages/user/question/question-layout";
import UserAccountLayout from "@pages/user/account/account-layout";
import ArticleLayout from "@pages/user/article/_layout";
import UserProfileLayout from "@pages/user/users/profile-layout";
import UserHomeLayout from "@pages/user/home/home-layout";
import CalendarLayout from "@pages/user/calendar/_layout";

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

import Calendar from "@pages/user/calendar/calendar";

//Others
import ErrorElement from "@pages/user/common/error";
import EditProfile from "@pages/user/users/edit-profile";
import MyProfile from "@pages/user/users/my-profile";
import QuestionAsk from "@pages/user/question/question-ask";
import HelpsLayout from "@pages/user/help/_layout";
import Helps from "@pages/user/help/helps";
import Help from "@pages/user/help/help";
import Policy from "@pages/user/help/policy";
import Terms from "@pages/user/help/terms";
import Feedback from "@pages/user/help/feedback";
import SettingsLayout from "@pages/user/settings/_layout";
import UserProfileSettings from "@pages/user/settings/settings-profile";
import UserAccountSettings from "@pages/user/settings/settings-account";
import UserEmailSettings from "@pages/user/settings/settings-email";
import UserPasswordSettings from "@pages/user/settings/settings-password";
import UserAppearanceSettings from "@pages/user/settings/settings-appearance";

//Admin
import AdminLayout from "@pages/admin/admin/admin-layout";
import AdminLogin from "@pages/admin/admin/login";
import CommunityLayout from "./pages/user/community/community-layout";
import Explore from "@pages/user/community/community-explore";
import Community from "@pages/user/community/community";
import Blog from "./pages/user/blog/blog";
import BlogLayout from "./pages/user/blog/_layout";
import Blogs from "./pages/user/blog/blogs";
import Event from "@pages/user/events/event";
import EventsLayout from "@pages/user/events/events-layout";
import Events from "@pages/user/events/events";
import About from "./pages/user/about/about";
import AboutFocus from "./pages/user/about/about-focus";
import AboutInitiatives from "./pages/user/about/about-initiatives";
import AboutLatest from "./pages/user/about/about-latest";
import LearningsLayout from "@pages/user/learning/_layout";
import Learnings from "@pages/user/learning/learnings";
import Learning from "@pages/user/learning/learning";

import OverviewAdmin from "@pages/admin/overview/overview";

import Farms from "@pages/admin/farms/farms";
import FarmsAdmin from "@pages/admin/farms/farms-admin";
import FarmsPending from "@pages/admin/farms/farms-pending";
import FarmsRejected from "@pages/admin/farms/farms-rejected";
import FarmersAdmin from "@pages/admin/farms/farmers-admin";
import FarmersBanned from "@pages/admin/farms/farmers-banned";
import FarmersReported from "@pages/admin/farms/farmers-reported";

import Resource from "@pages/admin/resources/resource";
import BlogsAdmin from "@pages/admin/resources/blogs/blogs-admin";
import AddBlogs from "@pages/admin/resources/blogs/blogs-add";
import UpdateBlogs from "@pages/admin/resources/blogs/blogs-update";
import BlogsDraft from "@pages/admin/resources/blogs/blogs-draft";
import BlogsArchive from "@pages/admin/resources/blogs/blogs-archive";
import EventsAdmin from "@pages/admin/resources/events/events-admin";
import AddEvents from "@pages/admin/resources/events/events-view";
import UpdateEvents from "@pages/admin/resources/events/events-update";
import EventsDraft from "@pages/admin/resources/events/events-draft";
import EventsArchive from "@pages/admin/resources/events/events-archive";
import LearningsAdmin from "@pages/admin/resources/learnings/learnings-admin";
import UpdateLearnings from "@pages/admin/resources/learnings/learnings-add-details";
import LearningsDraft from "@pages/admin/resources/learnings/learnings-draft";
import LearningArchive from "@pages/admin/resources/learnings/learning-archive";
import ArticlesAdmin from "@pages/admin/resources/articles/articles-admin";
import AddArticles from "@pages/admin/resources/articles/articles-add";
import UpdateArticles from "@pages/admin/resources/articles/articles-update";
import ArticlesDraft from "@pages/admin/resources/articles/articles-draft";
import ArticlesArchive from "@pages/admin/resources/articles/articles-archive";

import Forums from "@pages/admin/forums/forums";
import QuestionsAdmin from "@pages/admin/forums/questions-admin";
import QuestionsReported from "@pages/admin/forums/questions-reported";
import QuestionsArchive from "@pages/admin/forums/questions-archive";
import TagsAdmin from "@pages/admin/forums/tags-admin";

import HelpsAdmin from "@pages/admin/website/help/helps-admin";
import HelpAdmin from "@pages/admin/website/help/help-admin";
import FeedbackAdmin from "@pages/admin/website/feedback/feedback-admin";

import HomeAdmin from "@pages/admin/website/home/home-admin";
import ClientAdmin from "@pages/admin/website/client/client-admin";
import AboutAdmin from "@pages/admin/website/about/about-admin";
import PrivacyAdmin from "@pages/admin/website/privacy/privacy-admin";
import TermsAdmin from "@pages/admin/website/terms/terms-admin";

import RecordUsers from "@pages/admin/users/record-users";
import UsersReported from "@pages/admin/users/users-reported";
import UsersBanned from "@pages/admin/users/users-banned";

import RecordAdmins from "@pages/admin/admins/record-admins";
import DisabledAdmin from "@pages/admin/admins/disabled-admin";

import ActivityLog from "@pages/admin/activities/activity-log";

// Providers
import AboutLayout from "./pages/user/about/_layout";
import CommunityRegister from "./pages/user/community/community-register";
import FarmApplication from "./pages/admin/farm-application/farm-application";
import FarmApplicationView from "./pages/admin/farm-application/farm-application-view";
import CommunityMain from "./pages/user/community/community-main";
import CommunityCrop from "./pages/user/community/community-crops";
import Overview from "./pages/user/community/tabs/overview";
import Analytics from "./pages/user/community/tabs/analytics";
import Crops from "./pages/user/community/tabs/crops";
import Members from "./pages/user/community/tabs/members";
import Gallery from "./pages/user/community/tabs/gallery";
import CommunityReport from "./pages/user/community/community-report";
import CropsReport from "./pages/user/community/tabs/crops-report/crops-report";
import CropsReportAdd from "./pages/user/community/tabs/crops-report/crops-report-add";
import CommunityProfile from "./pages/user/community/community-profile";
import InviteFarm from "./pages/user/invitation/invite-farm";
import InviteLayout from "./pages/user/invitation/invite-layout";
import CropsReportView from "./pages/user/community/tabs/crops-report/crops-report-view";
import ViewEvents from "@pages/admin/resources/events/events-view";
import SeedlingPending from "@pages/admin/farms/seedling-pending";
import MainLayout from "@pages/user/layout/main-layout";
import SeedlingAccepted from "@pages/admin/farms/seedling-accepted";
import SeedlingRejected from "@pages/admin/farms/seedling-rejected";
import AnalyticsAdmin from "@pages/admin/analytics/analytics-admin";

const App = ReactRouter(
  <>
    <Route path="/" element={<MainLayout />} errorElement={<ErrorElement />}>
      {/* Landing Page */}

      <Route path="/" element={<UserHomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="invite/farm/:id" element={<InviteFarm />} />
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
        <Route path="register" element={<CommunityRegister />} />

        {/* Public Community */}
        <Route path="explore/:id" element={<CommunityMain />}>
          <Route path="" element={<Overview />} />
          <Route path="crops" element={<Crops />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>

        {/* My Community */}
        <Route path="my-community/:id" element={<CommunityMain />}>
          <Route path="" element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="crops" element={<Crops />} />
          <Route path="members" element={<Members />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="my-community/:id/profile" element={<CommunityProfile />} />
        <Route
          path="my-community/:id/crops/:cropId"
          element={<CommunityCrop />}
        />
        {/* Reports */}
        <Route path="reports/:id" element={<CommunityReport />}>
          <Route path="" element={<CropsReport />} />
          <Route path="add" element={<CropsReportAdd />} />
          <Route path="view/:cropId" element={<CropsReportView />} />
        </Route>
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
        <Route path=":eventId" element={<Event />} />
      </Route>

      {/* Learning Page */}
      <Route path="/learning-materials" element={<LearningsLayout />}>
        <Route path="" element={<Learnings />} />
        <Route path="view/:learningsId" element={<Learning />} />
      </Route>

      {/* Planting Calendar Page */}
      <Route path="/planting-calendar" element={<CalendarLayout />}>
        <Route path="" element={<Calendar />} />
      </Route>

      {/* Help Center Page */}
      <Route path="/helps" element={<HelpsLayout />}>
        <Route path="" element={<Helps />} />
        <Route path=":ref" element={<Help />} />
      </Route>

      {/* Profile Page  */}
      <Route path="/users" element={<UserProfileLayout />}>
        <Route path=":userId/me" element={<MyProfile />} />
        <Route path=":userId/me/edit" element={<EditProfile />} />
      </Route>

      {/* Settings */}
      <Route path="/settings" element={<SettingsLayout />}>
        <Route path="profile" element={<UserProfileSettings />} />
        <Route path="account" element={<UserAccountSettings />} />
        <Route path="email" element={<UserEmailSettings />} />
        <Route path="authentication" element={<UserPasswordSettings />} />
        <Route path="appearance" element={<UserAppearanceSettings />} />
      </Route>

      {/* others */}
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/terms-condition" element={<Terms />} />
      <Route path="/feedback" element={<Feedback />} />
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
      <Route path="dashboard" element={<OverviewAdmin />} />
      <Route path="analytics" element={<AnalyticsAdmin />} />

      {/* Community  */}
      <Route path="farm" element={<Farms />} />
      <Route path="farm">
        <Route path="farmers" element={<FarmersAdmin />} />
        <Route path="accounts-reported" element={<FarmersReported />} />
        <Route path="accounts-banned" element={<FarmersBanned />} />

        <Route path="farm-approved" element={<FarmsAdmin />} />
        {/* <Route path="farm-request" element={<FarmsPending />} /> */}
        <Route path="farm-request" element={<FarmApplication />} />
        <Route path="farm-request/:id" element={<FarmApplicationView />} />
        <Route path="farm-rejected" element={<FarmsRejected />} />

        <Route path="seedling-pending" element={<SeedlingPending />} />
        <Route path="seedling-accepted" element={<SeedlingAccepted />} />
        <Route path="seedling-rejected" element={<SeedlingRejected />} />
      </Route>

      {/* Resources */}
      <Route path="resources" element={<Resource />} />
      <Route path="resource">
        <Route path="blogs">
          <Route path="" element={<BlogsAdmin />} />
          <Route path="add" element={<AddBlogs />} />
          <Route path="view/:blogId" element={<UpdateBlogs />} />
        </Route>
        <Route path="blogs-drafts" element={<BlogsDraft />} />
        <Route path="blogs-archives" element={<BlogsArchive />} />

        <Route path="events">
          <Route path="" element={<EventsAdmin />} />
          <Route path="view/:eventId" element={<ViewEvents />} />
        </Route>
        <Route path="events-draft" element={<EventsDraft />} />
        <Route path="events-archives" element={<EventsArchive />} />

        <Route path="learnings">
          <Route path="" element={<LearningsAdmin />} />
          <Route path="view/:learningsId" element={<UpdateLearnings />} />
        </Route>
        <Route path="learnings-draft" element={<LearningsDraft />} />
        <Route path="learnings-archives" element={<LearningArchive />} />

        <Route path="articles">
          <Route path="" element={<ArticlesAdmin />} />
          <Route path="add" element={<AddArticles />} />
          <Route path="view/:articlesId" element={<UpdateArticles />} />
        </Route>
        <Route path="articles-draft" element={<ArticlesDraft />} />
        <Route path="articles-archives" element={<ArticlesArchive />} />
      </Route>

      {/* Forums */}
      <Route path="forum" element={<Forums />} />
      <Route path="forum">
        <Route path="questions" element={<QuestionsAdmin />} />
        <Route path="question-reported" element={<QuestionsReported />} />
        <Route path="question-archive" element={<QuestionsArchive />} />

        <Route path="tags" element={<TagsAdmin />} />
      </Route>

      {/* records */}
      <Route path="record">
        <Route path="users" element={<RecordUsers />} />
        <Route path="user-reported" element={<UsersReported />} />
        <Route path="user-banned" element={<UsersBanned />} />

        <Route path="admins" element={<RecordAdmins />} />
        <Route path="admin-disabled" element={<DisabledAdmin />} />

        <Route path="activity-logs" element={<ActivityLog />} />
      </Route>

      <Route path="website">
        <Route path="help-center" element={<HelpsAdmin />} />
        <Route path="help-center/sub-categories" element={<HelpAdmin />} />
        <Route path="user-feedback" element={<FeedbackAdmin />} />
        <Route path="home" element={<HomeAdmin />} />
        <Route path="client-details" element={<ClientAdmin />} />
        <Route path="home" element={<HomeAdmin />} />
        <Route path="about-us" element={<AboutAdmin />} />
        <Route path="privacy-policy" element={<PrivacyAdmin />} />
        <Route path="terms-conditions" element={<TermsAdmin />} />
      </Route>
    </Route>
  </>
);

export default App;
