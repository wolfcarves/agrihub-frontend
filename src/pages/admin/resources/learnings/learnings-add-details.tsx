import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
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
import { useParams } from "react-router-dom";
import LearningCreditForm from "./components/learning-credit";
import LearningDetailForm from "./components/learning-detail";
import LearningResourceForm from "./components/learning-resource";

const UpdateLearnings = () => {
  const { learningsId } = useParams();

  // breadcrumbs
  const breadcrumbItems = [
    { title: "Resource Management", link: "/admin/resources" },
    { title: "Learnings", link: "/admin/resource/events" },
    {
      title: `View Learning Material ${learningsId}`,
      link: `/admin/resource/learnings/view/${learningsId}`
    }
  ];

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Learning Material# {learningsId}
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Complete your draft, after publishing this material it will be visible
        to public. You can also save your progress in draft or delete it.
      </p>
      <hr className="my-4" />
      <div className="max-w-[60rem] mx-auto">
        <form>
          <LearningDetailForm />
          <LearningResourceForm />
          <LearningCreditForm />

          {/* ==================================bu-ons======================================== */}
          <div className="flex gap-4 justify-end mt-4">
            <Link to="/admin/resource/learnings-draft">
              <Button variant="ghost">Back</Button>
            </Link>

            {/* delete */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="hover:border-red-500">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Material?</AlertDialogTitle>
                  <AlertDialogDescription>
                    When you delete learning material it will go to archive and
                    you can recover it from there.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/learnings-archives">
                    <AlertDialogAction className="bg-red-600 hover:bg-red-500 hover:text-black">
                      Delete
                    </AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* publish */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Publish Material</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to upload this material?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This learning material can be seen publicly by the users
                    when published, make sure to review everything before
                    publishing.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/learnings">
                    <AlertDialogAction>Publish</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </form>
      </div>
    </AdminOutletContainer>
  );
};

export default UpdateLearnings;
