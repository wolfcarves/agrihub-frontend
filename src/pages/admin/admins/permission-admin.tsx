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
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../icons/Loader";
import useGetAccessViewQuery from "../../../hooks/api/get/useGetAccessViewQuery";
import usePutAccessUpdate from "../../../hooks/api/put/usePutAccessUpdate";
import { UpdateAccessControl } from "../../../api/openapi";
import { toast } from "sonner";
import { formatImage } from "../../../components/lib/utils";
import BackButton from "@components/ui/custom/button/back-button";

const breadcrumbItems = [
  { title: "Admin Management", link: "/admin/record/admins" },
  { title: "Set Permission", link: "/admin/record/admins/set-permission" }
];
const SetPermissionAdmin = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { data: adminData, isLoading: adminLoad } = useGetAccessViewQuery(
    userId || ""
  );
  console.log(adminData);

  const [allowAll, setAllowAll] = useState<boolean>(false);
  const [learningMaterials, setLearningMaterials] = useState<boolean>(false);
  const [events, setEvents] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<boolean>(false);
  const [cropsManagement, setCropsManagement] = useState<boolean>(false);
  const handleAllowAllChange = (isChecked: boolean) => {
    setAllowAll(isChecked);
    setLearningMaterials(isChecked);
    setEvents(isChecked);
    setBlogs(isChecked);
    setCropsManagement(isChecked);
  };

  useEffect(() => {
    if (learningMaterials && events && blogs && cropsManagement) {
      setAllowAll(true);
    } else {
      setAllowAll(false);
    }
  }, [learningMaterials, events, blogs, cropsManagement, allowAll]);

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
      helpCenter
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
    helpCenter
  ]);

  useEffect(() => {
    if (!adminLoad) {
      setLearningMaterials(adminData?.learning || false);
      setEvents(adminData?.event || false);
      setBlogs(adminData?.blog || false);
      setCommunityManagement(adminData?.farms || false);
      setForumManagement(adminData?.forums || false);
      setUserManagement(adminData?.users || false);
      setAdminManagement(adminData?.admin || false);
      setActivityLogs(adminData?.activity_logs || false);
      setLearningMaterials(adminData?.learning || false);
      setClientDetails(adminData?.cuai || false);
      setHomePage(adminData?.home || false);
      setAboutUs(adminData?.about || false);
      setPrivacyPolicy(adminData?.privacy_policy || false);
      setTermsAndConditions(adminData?.terms_and_conditions || false);
      setUserFeedbacks(adminData?.user_feedback || false);
      setHelpCenter(adminData?.help_center || false);
      setCropsManagement(adminData?.crops || false);
    }
  }, [adminData]);

  //edit
  const { mutateAsync: updateAdminMutate, isLoading: isUpdateLoading } =
    usePutAccessUpdate();

  //submit form
  const handleSubmitForm = async () => {
    const compiledData: UpdateAccessControl = {
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
      activity_logs: true
    };

    try {
      await updateAdminMutate({
        id: userId || "",
        requestBody: compiledData
      });
      toast.success("Admin Access Updated Successfully!");
      navigate(`/admin/record/admins`);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  if (adminLoad) {
    return <Loader isVisible={true} />;
  }

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight flex gap-4">
        <BackButton />
        Update admin access
      </h2>
      <p className="text-sm text-muted-foreground w-10/12">
        Maintain the integrity and security of your platform by keeping admin
        accounts up-to-date. Manage changes to access levels, permissions, and
        credentials to reflect evolving roles and responsibilities. Ensure that
        only authorized personnel have appropriate access to critical
        functionalities and sensitive information.
      </p>
      <hr className="my-4" />
      <Card className="w-full p-5">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Set Permission for
            </h2>
            <p className="text-sm text-muted-foreground">
              Modify what individuals on this role can do
            </p>
          </div>
          <Card className="flex w-full sm:w-auto items-center gap-x-3 py-3 px-6 whitespace-nowrap">
            <img
              src={
                adminData?.avatar
                  ? formatImage(adminData.avatar)
                  : "https://randomuser.me/api/portraits/lego/4.jpg"
              }
              className="w-10 h-10 rounded-full shadow"
            />
            <div>
              <span className="block text-gray-700 text-sm font-medium">
                {adminData?.firstname &&
                  adminData.lastname &&
                  `${adminData?.firstname} ${adminData?.lastname}`}
              </span>
              <span className="block text-gray-700 text-xs">
                {adminData?.email}
              </span>
            </div>
          </Card>
        </div>
        <hr className="my-4" />

        {/* community */}
        <Card className="p-5">
          <div className="flex-col w-full items-center">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-bold tracking-tight">
                Community Management
              </h2>
              <Switch
                checked={communityManagement}
                onCheckedChange={setCommunityManagement}
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Turning on this permission allows users to access farm details and
              accept or reject farm applications. It will also allow users to
              view seedling requests from farms and accept or reject them.
            </p>
          </div>
        </Card>

        {/* resource module */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <div className="flex gap-4 justify-between">
                <h2 className="text-lg font-bold tracking-tight">
                  Resource Module
                </h2>
                <div className="flex sm:gap-4 items-center">
                  <Label>Allow All</Label>
                  <Switch
                    checked={allowAll}
                    onCheckedChange={handleAllowAllChange}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to have modification
                access to learning materials, events, and blogs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 my-4">
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex gap-4 justify-between mb-2">
                  <h2 className="text-md font-bold tracking-tight">
                    Learning Materials
                  </h2>
                  <Switch
                    checked={learningMaterials}
                    onCheckedChange={setLearningMaterials}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Allow users to have add, edit, and delete access to Learning
                    Materials.
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex mb-2 gap-4 justify-between">
                  <h2 className="text-md font-bold tracking-tight">Events</h2>
                  <Switch checked={events} onCheckedChange={setEvents} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Allow users to have add, edit, and delete access to Events.
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-4 my-4">
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex gap-4 mb-2 justify-between">
                  <h2 className="text-md font-bold tracking-tight">Blogs</h2>
                  <Switch checked={blogs} onCheckedChange={setBlogs} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Allow users to have add, edit, and delete access to Blogs.
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-bold tracking-tight">
                    Crops Management
                  </h2>
                  <Switch
                    checked={cropsManagement}
                    onCheckedChange={setCropsManagement}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
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
            <div className="w-full">
              <div className="flex gap-4 justify-between items-center">
                <h2 className="text-lg font-bold tracking-tight">
                  Forum Management
                </h2>
                <Switch
                  checked={forumManagement}
                  onCheckedChange={setForumManagement}
                />
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to access reported
                questions and answers. It also allows users to add new tags and
                delete them.
              </p>
            </div>
          </div>
        </Card>

        {/* user management */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <div className="flex gap-4 justify-between items-center">
                <h2 className="text-lg font-bold tracking-tight">
                  User Management
                </h2>
                <Switch
                  checked={userManagement}
                  onCheckedChange={setUserManagement}
                />
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to manage reported user
                accounts and ban accounts.
              </p>
            </div>
          </div>
        </Card>

        {/* admin management */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <div className="flex items-center gap-4 justify-between">
                <h2 className="text-lg font-bold tracking-tight">
                  Admin Management
                </h2>
                <Switch
                  checked={adminManagement}
                  onCheckedChange={setAdminManagement}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Turning on this permission allows users to add new admins and
                edit their permissions.
              </p>
            </div>
          </div>
        </Card>

        {/* website management */}
        <Card className="my-4 p-5">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <div className="w-full justify-between items-center flex">
                <h2 className="text-lg font-bold tracking-tight">
                  Website Management
                </h2>
                <div className="flex gap-4 items-center">
                  <Label>Allow All</Label>
                  <Switch
                    checked={allowAllManagement}
                    onCheckedChange={handleAllManagementChange}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Turning on this permission allows users to have modification
                access to client details, home page, about us, privacy policy,
                terms and conditions, user feedback, help center and crops
                management.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-md font-bold tracking-tight">
                    Client details
                  </h2>
                  <Switch
                    checked={clientDetails}
                    onCheckedChange={setClientDetails}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Allow user to modify client details
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex justify-between mb-2 items-center">
                  <h2 className="text-md font-bold tracking-tight">
                    Home Page
                  </h2>
                  <Switch checked={homePage} onCheckedChange={setHomePage} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>

          <div className="flex w-full gap-4 my-4 flex-wrap sm:flex-nowrap">
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex mb-2 justify-between">
                  <h2 className="text-md font-bold tracking-tight">About Us</h2>
                  <Switch checked={aboutUs} onCheckedChange={setAboutUs} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex mb-2 items-center justify-between">
                  <h2 className="text-md font-bold tracking-tight">
                    Privacy Policy
                  </h2>
                  <Switch
                    checked={privacyPolicy}
                    onCheckedChange={setPrivacyPolicy}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
          <div className="flex w-full gap-4 my-4 flex-wrap sm:flex-nowrap">
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex mb-2 justify-between items-center">
                  <h2 className="text-md font-bold tracking-tight">
                    Terms and Condition
                  </h2>
                  <Switch
                    checked={termsAndConditions}
                    onCheckedChange={setTermsAndConditions}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex mb-2 justify-between items-center">
                  <h2 className="text-md font-bold tracking-tight">
                    User Feedbacks
                  </h2>
                  <Switch
                    checked={userFeedbacks}
                    onCheckedChange={setUserFeedbacks}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Modify what individuals on this role can do
                  </p>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
          <div className="flex sm:w-1/2 w-full gap-4 my-4 flex-wrap sm:flex-nowrap">
            <div className="w-full">
              <div className="flex-col items-center gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-bold tracking-tight">
                    Help Center
                  </h2>
                  <Switch
                    checked={helpCenter}
                    onCheckedChange={setHelpCenter}
                  />
                </div>
                <div>
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
              <Button>Update</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure about this settings?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will give access to "{adminData?.email}" to the
                  access turned on, make sure you allow the right access. You
                  can edit admin access permission by going to Admin Management
                  {">"}edit admin.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction onClick={handleSubmitForm}>
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
      <Loader isVisible={isUpdateLoading} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  SetPermissionAdmin,
  ["admin", "asst_admin"],
  "admin"
);
