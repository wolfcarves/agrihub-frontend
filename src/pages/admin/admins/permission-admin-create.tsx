import React, { useEffect, useState } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Card } from "@components/ui/card";
import { Switch } from "@components/ui/switch";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../../redux/store";
import useAccessCreateAdmin from "../../../hooks/api/post/useAccessCreateAdmin";
import { NewAdminRequestBody } from "../../../api/openapi";
import { toast } from "sonner";
import Loader from "../../../icons/Loader";
import { setEmail, setPassword } from "../../../redux/slices/adminSlice";

const breadcrumbItems = [
  { title: "Admin Management", link: "/admin/record/admins" },
  { title: "Set Permission", link: "/admin/record/admins/set-permission" }
];
const PermissionAdminCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = useSelector(state => state.admin);

  const [allowAll, setAllowAll] = useState<boolean>(false);
  const [learningMaterials, setLearningMaterials] = useState<boolean>(false);
  const [events, setEvents] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<boolean>(false);
  const handleAllowAllChange = (isChecked: boolean) => {
    setAllowAll(isChecked);
    setLearningMaterials(isChecked);
    setEvents(isChecked);
    setBlogs(isChecked);
  };

  useEffect(() => {
    if (learningMaterials && events && blogs) {
      setAllowAll(true);
    } else {
      setAllowAll(false);
    }
  }, [learningMaterials, events, blogs, allowAll]);

  const [forumManagement, setForumManagement] = useState<boolean>(false);
  const [userManagement, setUserManagement] = useState<boolean>(false);
  const [adminManagement, setAdminManagement] = useState<boolean>(false);
  const [communityManagement, setCommunityManagement] =
    useState<boolean>(false);
  const [activityLog, setActivityLogs] = useState<boolean>(false);

  const [allowAllManagement, setAllowAllManagement] = useState<boolean>(false);
  const [clientDetails, setClientDetails] = useState<boolean>(false);
  const [homePage, setHomePage] = useState<boolean>(false);
  const [aboutUs, setAboutUs] = useState<boolean>(false);
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false);
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
  const [userFeedbacks, setUserFeedbacks] = useState<boolean>(false);
  const [helpCenter, setHelpCenter] = useState<boolean>(false);
  const [cropsManagement, setCropsManagement] = useState<boolean>(false);

  const handleAllManagementChange = (isChecked: boolean) => {
    setAllowAllManagement(isChecked);
    setClientDetails(isChecked);
    setHomePage(isChecked);
    setAboutUs(isChecked);
    setPrivacyPolicy(isChecked);
    setTermsAndConditions(isChecked);
    setUserFeedbacks(isChecked);
    setHelpCenter(isChecked);
    setCropsManagement(isChecked);
  };

  useEffect(() => {
    if (
      clientDetails &&
      homePage &&
      aboutUs &&
      privacyPolicy &&
      termsAndConditions &&
      userFeedbacks &&
      helpCenter &&
      cropsManagement
    ) {
      setAllowAllManagement(true);
    } else {
      setAllowAllManagement(false);
    }
  }, [
    allowAllManagement,
    homePage,
    clientDetails,
    aboutUs,
    privacyPolicy,
    termsAndConditions,
    userFeedbacks,
    helpCenter,
    cropsManagement
  ]);

  //edit
  const { mutateAsync: createAdminMutate, isLoading: isCreateLoading } =
    useAccessCreateAdmin();

  //submit form
  const handleSubmitForm = async () => {
    const compiledData: NewAdminRequestBody = {
      email: email,
      password: password,
      access: {
        farms: communityManagement,
        learning: learningMaterials,
        event: events,
        blog: blogs,
        forums: forumManagement,
        admin: adminManagement,
        cuai: clientDetails,
        home: homePage,
        about: aboutUs,
        users: userManagement,
        privacy_policy: privacyPolicy,
        terms_and_conditions: termsAndConditions,
        user_feedback: userFeedbacks,
        crops: cropsManagement,
        help_center: helpCenter,
        activity_logs: activityLog
      }
    };

    try {
      await createAdminMutate({
        requestBody: compiledData
      });
      toast.success("Admin Created Successfully!");
      navigate(`/admin/record/admins?tab=active`);
      dispatch(setEmail(""));
      dispatch(setPassword(""));
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Create admin access</h2>
      <p className="text-sm text-muted-foreground">Set what admin can do</p>
      <hr className="my-4" />
      <Card className="w-full p-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Set Permission for
            </h2>
            <p className="text-sm text-muted-foreground">
              Modify what individuals on this role can do
            </p>
          </div>
          <Card className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
            <img
              src="https://randomuser.me/api/portraits/lego/4.jpg"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="block text-gray-700 text-sm font-poppins-medium">
                {email}
              </span>
            </div>
          </Card>
        </div>
        <hr className="my-4" />

        {/* community */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Community Management
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to access farm details
                and accept or reject farm applications. It will also allow users
                to view seedling requests from farms and accept or reject them.
              </p>
            </div>
            <Switch
              checked={communityManagement}
              onCheckedChange={setCommunityManagement}
            />
          </div>
        </Card>

        {/* resource module */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Resource Module
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to have modification
                access to learning materials, events, and blogs.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Label>Allow All</Label>
              <Switch
                checked={allowAll}
                onCheckedChange={handleAllowAllChange}
              />
            </div>
          </div>

          <div className="flex w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch
                  checked={learningMaterials}
                  onCheckedChange={setLearningMaterials}
                />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    Learning Materials
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Allow users to have add, edit, and delete access to Learning
                    Materials.
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch checked={events} onCheckedChange={setEvents} />
                <div>
                  <h2 className="text-md font-bold tracking-tight">Events</h2>
                  <p className="text-sm text-muted-foreground">
                    Allow users to have add, edit, and delete access to Events.
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>

          <div className="flex w-1/2 gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch checked={blogs} onCheckedChange={setBlogs} />
                <div>
                  <h2 className="text-md font-bold tracking-tight">Blogs</h2>
                  <p className="text-sm text-muted-foreground">
                    Allow users to have add, edit, and delete access to Blogs.
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
        </Card>

        {/* forum */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Forum Management
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to access reported
                questions and answers. It also allows users to add new tags and
                delete them.
              </p>
            </div>
            <Switch
              checked={forumManagement}
              onCheckedChange={setForumManagement}
            />
          </div>
        </Card>

        {/* user management */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                User Management
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to manage reported user
                accounts and ban accounts.
              </p>
            </div>
            <Switch
              checked={userManagement}
              onCheckedChange={setUserManagement}
            />
          </div>
        </Card>

        {/* admin management */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Admin Management
              </h2>
              <p className="text-sm text-muted-foreground">
                Turning on this permission allows users to add new admins and
                edit their permissions.
              </p>
            </div>
            <Switch
              checked={adminManagement}
              onCheckedChange={setAdminManagement}
            />
          </div>
        </Card>

        {/* logs */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Activity Logs
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to access activity logs
                of other admin
              </p>
            </div>
            <Switch checked={activityLog} onCheckedChange={setActivityLogs} />
          </div>
        </Card>

        {/* website management */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Website Management
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to have modification
                access to client details, home page, about us, privacy policy,
                terms and conditions, user feedback, help center and crops
                management.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Label>Allow All</Label>
              <Switch
                checked={allowAllManagement}
                onCheckedChange={handleAllManagementChange}
              />
            </div>
          </div>
          <div className="flex w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch
                  checked={clientDetails}
                  onCheckedChange={setClientDetails}
                />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    Client details
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Allow user to modify client details
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch checked={homePage} onCheckedChange={setHomePage} />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    Home Page
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>

          <div className="flex w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch checked={aboutUs} onCheckedChange={setAboutUs} />
                <div>
                  <h2 className="text-md font-bold tracking-tight">About Us</h2>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch
                  checked={privacyPolicy}
                  onCheckedChange={setPrivacyPolicy}
                />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    Privacy Policy
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
          <div className="flex w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch
                  checked={termsAndConditions}
                  onCheckedChange={setTermsAndConditions}
                />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    Terms and Condition
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch
                  checked={userFeedbacks}
                  onCheckedChange={setUserFeedbacks}
                />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    User Feedbacks
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
          <div className="flex w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch checked={helpCenter} onCheckedChange={setHelpCenter} />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    Help Center
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch
                  checked={cropsManagement}
                  onCheckedChange={setCropsManagement}
                />
                <div>
                  <h2 className="text-md font-bold tracking-tight">
                    Crops Management
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
        </Card>
        <div className="my-4 flex justify-end gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Continue</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure about this settings?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will give access to "{email}" to the access turned
                  on, make sure you allow the right access. You can edit admin
                  access permission by going to Admin Management
                  {">"}edit admin.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction onClick={handleSubmitForm}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
      <Loader isVisible={isCreateLoading} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  PermissionAdminCreate,
  ["admin", "asst_admin"],
  "admin"
);
