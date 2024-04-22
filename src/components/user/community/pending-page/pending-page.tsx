import React from "react";
import Pending from "@assets/images/pending.svg";
import OutletContainer from "@components/user/questions/container/OutletContainer";
import { Button } from "@components/ui/button";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useFarmCancelApplicationMutation from "@hooks/api/post/useFarmCancelApplicationMutation";
import { toast } from "sonner";
import useGetFarmCheckExistingApplication from "@hooks/api/get/useGetFarmCheckExistingApplication";
import Loader from "../../../../icons/Loader";
import ApplicationDialog from "../application-dialog/application-dialog";
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
} from "../../../ui/alert-dialog";

const PendingPage = () => {
  const { data } = useGetFarmCheckExistingApplication();
  const { mutateAsync: farmCancelMutate, isLoading } =
    useFarmCancelApplicationMutation();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleCancelApplication = async () => {
    try {
      await farmCancelMutate(data?.data.id || "");

      toast.info(`Successfully cancelled farm application`);
      navigate(`/community/register`);
    } catch (error: any) {}
  };
  return (
    <OutletContainer>
      <div onClick={handleBack}>
        <IoArrowBackCircleOutline className="text-gray-300 mt-2" size={40} />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h2 className="font-semibold md:text-xl text-md">
          Farm Application Pending...
        </h2>
        <img className="h-[15rem]" src={Pending as unknown as string} alt="" />
        <div className=" flex gap-2">
          <ApplicationDialog details={data?.data} />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"}>Cancel Application</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Cancel your farm application?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will cancel the farm application and all the data
                  you submitted will be deleted
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleCancelApplication}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <Loader isVisible={isLoading} />
    </OutletContainer>
  );
};

export default PendingPage;
