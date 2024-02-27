import React from "react";
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
import { Link } from "react-router-dom";

const breadcrumbItems = [
  { title: "Admin Management", link: "/admin/record/admins" },
  { title: "Set Permission", link: "/admin/record/admins/set-permission" }
];
const SetPermissionAdmin = () => {
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
              <span className="block text-gray-700 text-sm font-medium">
                Justine Angela Mariele D. Sanchez
              </span>
              <span className="block text-gray-700 text-xs">
                justine@gmail.com
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
            <Switch />
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
              <Switch />
            </div>
          </div>

          <div className="flex w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch />
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
                <Switch />
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
                <Switch />
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
            <Switch />
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
            <Switch />
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
            <Switch />
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
              <Switch />
            </div>
          </div>
          <div className="flex w-full gap-4 my-4">
            <div className="w-full">
              <div className="flex items-center gap-4">
                <Switch />
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
                <Switch />
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
                <Switch />
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
                <Switch />
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
                <Switch />
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
                <Switch />
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
                <Switch />
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
                <Switch />
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
              <Button variant="outline">Continue</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure about this settings?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will give access to "justine@gmail.com" to the
                  access turned on, make sure you allow the right access. You
                  can edit admin access permission by going to Admin Management
                  {">"}edit admin.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Link to="/admin/record/admins">
                  <AlertDialogAction>Continue</AlertDialogAction>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  SetPermissionAdmin,
  ["admin", "asst_admin"],
  "admin"
);
