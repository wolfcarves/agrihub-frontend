import { Route } from "react-router-dom";

import ReactRouter from "@router/router";
import "./globals.css";

//Layouts
import QuestionLayout from "@pages/user/question/question-layout";
import UserAccountLayout from "@pages/user/account/account-layout";
import UserProfileLayout from "@pages/user/users/profile-layout";
import UserHomeLayout from "@pages/user/home/home-layout";
import PlantingCalendarLayout from "@pages/user/planting-calendar/planting-calendar-layout";

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

import PlantingCalendar from "@pages/user/planting-calendar/planting-calendar";

//Others
import ErrorElement from "@pages/user/common/error";
import UserProfile from "@pages/user/users/profile";
import QuestionAsk from "@pages/user/question/question-ask";
import QuestionEdit from "@pages/user/question/question-edit";
import HelpsLayout from "@pages/user/help/_layout";
import Helps from "@pages/user/help/helps";
import Help from "@pages/user/help/help";
import Policy from "@pages/user/help/policy";
import Terms from "@pages/user/help/terms";
import Feedback from "@pages/user/help/feedback";
import SettingsLayout from "@pages/user/settings/settings-layout.tsx";
import UserProfileSettings from "@pages/user/settings/settings-profile";
import UserAccountSettings from "@pages/user/settings/settings-account";
import UserEmailSettings from "@pages/user/settings/settings-email";
import UserSettingsAuthentication from "@pages/user/settings/settings-authentication";
import UserAppearanceSettings from "@pages/user/settings/settings-appearance";

//Admin
import AdminLayout from "@pages/admin/admin/admin-layout";
import CommunityLayout from "./pages/user/community/community-layout";
import Explore from "@pages/user/community/community-explore";
import Community from "@pages/user/community/community";
import Blog from "./pages/user/blog/blog";
import BlogLayout from "./pages/user/blog/blogs-layout";
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

import Resource from "@pages/admin/resources/resource";
import BlogsAdmin from "@pages/admin/resources/blogs/blogs-admin";
import EventsAdmin from "@pages/admin/resources/events/events-admin";
import LearningsAdmin from "@pages/admin/resources/learnings/learnings-admin";
import UpdateLearnings from "@pages/admin/resources/learnings/learnings-add-details";
import Forums from "@pages/admin/forums/forums";
import QuestionsAdmin from "@pages/admin/forums/questions-admin";
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

import RecordAdmins from "@pages/admin/admins/record-admins";

import ActivityLog from "@pages/admin/activities/activity-log";

// Providers
import AboutLayout from "./pages/user/about/_layout";
import CommunityRegister from "./pages/user/community/community-register";
import FarmApplicationView from "@pages/admin/farm-application/farm-application-view";
import CommunityMain from "./pages/user/community/community-main";
import CommunityCrop from "./pages/user/community/community-crops";
import Overview from "./pages/user/community/tabs/overview";
import Analytics from "./pages/user/community/tabs/analytics";
import Crops from "./pages/user/community/tabs/crops";
import Members from "./pages/user/community/tabs/members";
import Gallery from "./pages/user/community/tabs/gallery";
import CommunityReport from "./pages/user/community/community-report";
import CropsReport from "./pages/user/community/reports/crops-report/crops-report";
import CropsReportAdd from "./pages/user/community/reports/crops-report/crops-report-add";
import CommunityProfile from "./pages/user/community/community-profile";
import InviteFarm from "./pages/user/invitation/invite-farm";
import CropsReportView from "./pages/user/community/reports/crops-report/crops-report-view";
import ViewEvents from "@pages/admin/resources/events/events-view";
import MainLayout from "@pages/user/layout/main-layout";
import ViewBlogs from "./pages/admin/resources/blogs/blogs-view";
import AnalyticsAdmin from "@pages/admin/analytics/analytics-admin";
import CropView from "@pages/user/planting-calendar/crop-view";
import CommunityRequest from "./pages/user/community/community-request";
import SeedlingsRequest from "./pages/user/community/request/seedlings-request/seedlings-request";
import ForgotPassword from "@pages/user/account/forgot-password";
import ResetPassword from "@pages/user/account/reset-password";
import SetPermissionAdmin from "./pages/admin/admins/permission-admin";
import PermissionAdminCreate from "./pages/admin/admins/permission-admin-create";
import CropsAdmin from "@pages/admin/website/crops/crops-admin";
import AddCropsAdmin from "./pages/admin/website/crops/crops-add";
import FarmProblems from "@pages/admin/farms/farm-problems";
import FarmManageProblems from "@pages/admin/farms/view/farm-manage-problems";
import CommunityProblem from "./pages/user/community/community-problem";
import VerifyOtp from "@pages/user/account/verify-otp";
import SeedlingRequest from "@pages/admin/farms/seedling-request";
import Unauthorized from "@pages/user/common/unauthorized";
import FarmCommunity from "./pages/admin/farms/farm-community";
import FarmActiveView from "@pages/admin/farms/view/farm-active-view";
import VerifyPasswordOtp from "@pages/user/account/verify-password-otp";
import ToolReqeust from "@pages/admin/farms/tool-reqeust";
import UserGuides from "@pages/user/help/guides";
import CommunityApply from "./pages/user/community/community-apply";
import CommunityApplicationView from "./pages/user/community/community-application-view";

const App = ReactRouter(
  <>
    <Route path="/unauthorize" element={<Unauthorized />} />
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
          <Route path="ask/edit/:questionId" element={<QuestionEdit />} />
          <Route path="question/:username/:questionId" element={<Question />} />
        </>
      </Route>

      {/* Community Page */}
      <Route path="/community" element={<CommunityLayout />}>
        <Route path="" element={<Community />} />
        <Route path="explore" element={<Explore />} />
        <Route path="register" element={<CommunityRegister />} />
        <Route path="apply/:id" element={<CommunityApply />} />

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
        <Route
          path="my-community/:id/application/:user/:appId"
          element={<CommunityApplicationView />}
        />
        {/* Reports */}
        <Route path="reports/:id" element={<CommunityReport />}>
          <Route path="" element={<CropsReport />} />
          <Route path="add" element={<CropsReportAdd />} />
          <Route path="add/:cropId" element={<CropsReportAdd />} />
          <Route path="view/:cropId" element={<CropsReportView />} />
        </Route>
        {/* Request */}
        <Route path="request/:id" element={<CommunityRequest />} />
        {/* <Route path="" element={<SeedlingsRequest />} /> */}

        <Route path="problem/:id" element={<CommunityProblem />} />
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
      <Route path="/planting-calendar" element={<PlantingCalendarLayout />}>
        <Route path="" element={<PlantingCalendar />} />
        <Route path=":cropName" element={<CropView />} />
      </Route>

      {/* Help Center Page */}
      <Route path="/helps" element={<HelpsLayout />}>
        <Route path="" element={<Helps />} />
        <Route path=":ref" element={<Help />} />
        <Route path="guides" element={<UserGuides />} />
      </Route>

      {/* Profile Page  */}
      <Route path="/users" element={<UserProfileLayout />}>
        <Route path=":userId/:username/" element={<UserProfile />} />
        <Route path=":userId/:username/:saved" element={<UserProfile />} />
      </Route>

      {/* Settings */}
      <Route path="/settings" element={<SettingsLayout />}>
        <Route path="account" element={<UserAccountSettings />} />
        <Route path="profile" element={<UserProfileSettings />} />
        <Route path="email" element={<UserEmailSettings />} />
        <Route path="authentication" element={<UserSettingsAuthentication />} />
        {/* <Route path="appearance" element={<UserAppearanceSettings />} /> */}
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
      <Route path="verify-otp" element={<VerifyOtp />} />
      <Route path="setup-account" element={<SetupAccount />} />
      <Route path="final-setup" element={<FinalSetup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="reset-password/verify-otp" element={<VerifyPasswordOtp />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<OverviewAdmin />} />
      <Route path="analytics" element={<AnalyticsAdmin />} />

      {/* Community  */}
      <Route path="communities" element={<Farms />} />
      <Route path="community">
        <Route path="farms" element={<FarmCommunity />} />
        <Route path="farms/view/:id" element={<FarmActiveView />} />
        <Route path="farms/:tab" element={<FarmCommunity />} />

        <Route path="farms-application" element={<FarmsAdmin />} />
        <Route path="farms-application/:tab" element={<FarmsAdmin />} />
        <Route
          path="farms-application/view/:id"
          element={<FarmApplicationView />}
        />

        <Route path="tool-request" element={<ToolReqeust />} />
        <Route path="tool-request/:tab" element={<ToolReqeust />} />

        <Route path="seedling-request" element={<SeedlingRequest />} />
        <Route path="seedling-request/:tab" element={<SeedlingRequest />} />

        <Route path="problems" element={<FarmProblems />} />
        <Route path="problems/:tag" element={<FarmProblems />} />
        <Route path="problems/add" element={<FarmManageProblems />} />
        <Route
          path="problems/view/:problemId"
          element={<FarmManageProblems />}
        />
      </Route>

      {/* Resources */}
      <Route path="resources" element={<Resource />} />
      <Route path="resource">
        <Route path="blogs">
          <Route path="" element={<BlogsAdmin />} />
          <Route path="view/:blogId" element={<ViewBlogs />} />
        </Route>
        <Route path="blogs/:tab" element={<BlogsAdmin />} />

        <Route path="events">
          <Route path="" element={<EventsAdmin />} />
          <Route path="view/:eventId" element={<ViewEvents />} />
        </Route>
        <Route path="events/:tab" element={<EventsAdmin />} />

        <Route path="learnings">
          <Route path="" element={<LearningsAdmin />} />
          <Route path="view/:learningsId" element={<UpdateLearnings />} />
        </Route>

        <Route path="learnings/:tab" element={<LearningsAdmin />} />
      </Route>

      {/* Forums */}
      <Route path="forum">
        <Route path="" element={<Forums />} />

        <Route path="questions" element={<QuestionsAdmin />} />
        <Route path="questions/:tab" element={<QuestionsAdmin />} />
        <Route path="tags" element={<TagsAdmin />} />
      </Route>

      {/* records */}
      <Route path="record">
        {/* users */}
        <Route path="users" element={<RecordUsers />} />
        <Route path="users/:tab" element={<RecordUsers />} />

        {/* admin */}
        <Route path="admins" element={<RecordAdmins />} />
        <Route path="admins/:tab" element={<RecordAdmins />} />
        <Route
          path="admins/set-permission/:userId"
          element={<SetPermissionAdmin />}
        />
        <Route path="admins/create" element={<PermissionAdminCreate />} />

        {/* activity log */}
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
        <Route path="crops" element={<CropsAdmin />} />
        <Route path="crops/add" element={<AddCropsAdmin />} />
        <Route path="crops/update/:cropId" element={<AddCropsAdmin />} />
      </Route>
    </Route>
  </>
);

export default App;
