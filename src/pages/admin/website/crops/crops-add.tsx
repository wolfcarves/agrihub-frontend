import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
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
import CropsForm from "@components/admin/website/crops/forms/crops-form";

const breadcrumbItems = [
  {
    title: "Crops",
    link: "/admin/website/crops"
  },
  {
    title: "New Crops",
    link: "/admin/website/crops/add"
  }
];

const AddCropsAdmin = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Crops</h2>
          <p className="text-sm text-muted-foreground">
            Manage all registered and unregistered crops within the community
          </p>
        </div>
      </div>
      <hr className="my-4" />

      <div className="w-full">
        <CropsForm />
      </div>

      {/* add crop button */}
      <div className="flex justify-end my-8">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Add Crop</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you want to add this crop?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This will make the crop available in the planting calendar and
                can be selected by farmer as new crop.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link to="/admin/website/crops/">
                <AlertDialogAction>Confirm</AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(AddCropsAdmin, ["admin", "asst_admin"], "crops");
