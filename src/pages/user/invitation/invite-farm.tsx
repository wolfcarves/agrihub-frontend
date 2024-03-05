import React from "react";
import { Button } from "@components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import useGetFarmerInvitation from "@hooks/api/get/useGetFarmerInvitation";
import useFarmAcceptInvitationMutation from "../../../hooks/api/post/useFarmAcceptInvitationMutation";
import { toast } from "sonner";
import useFarmRejectInvitationMutation from "../../../hooks/api/post/useFarmRejectInvitationMutation";
import Loader from "../../../icons/Loader";
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
} from "../../../components/ui/alert-dialog";
import ErrorDisplay from "@assets/ErrorDisplay.svg";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
const InviteFarm = () => {
  const { id } = useParams();
  const { mutateAsync: acceptMutate, isLoading: acceptLoading } =
    useFarmAcceptInvitationMutation();
  const { mutateAsync: rejectMutate, isLoading: rejectLoading } =
    useFarmRejectInvitationMutation();
  const navigate = useNavigate();

  const { data, isError, isLoading } = useGetFarmerInvitation({
    id: id ? id : ""
  });

  const handleAccept = async () => {
    try {
      await acceptMutate(id ? id : "");

      navigate(`/community/my-community/${data?.community_farm_id}`);
      toast.success(`Welcome to ${data?.farm_name}`);
    } catch (error) {
      toast.error("Invitation Error");
    }
  };
  const handleBack = () => {
    navigate(-1);
  };

  const handleReject = async () => {
    try {
      await rejectMutate(id ? id : "");
      navigate("/");
      toast.success(`Invite declined successfully`);
    } catch (error) {
      toast.error("Invitation Error");
    }
  };

  if (isLoading) return <Loader isVisible={true} />;
  return (
    <div className="h-screen w-full flex flex-col mt-20 items-center">
      {isError ? (
        <>
          <OutletContainer>
            <div className=" flex flex-col justify-center items-center">
              <h3 className="font-semibold">
                This invitation has expired. :({" "}
              </h3>
              <img
                className="h-[25rem]"
                src={ErrorDisplay as unknown as string}
                alt=""
              />
              <Button onClick={handleBack}>Back</Button>
            </div>
            <Loader isVisible={isLoading} />
          </OutletContainer>
        </>
      ) : (
        <>
          <img
            className="w-32 h-32 rounded-full mb-4"
            src={data.avatar}
            alt="farm"
          />
          <div className="text-lg text-center">
            You're invited to become a part of the community by
            <span className="text-green-800 font-bold"> {data.farm_name}</span>
          </div>
          <div>{acceptLoading && "Loading..."}</div>
          <div>{rejectLoading && "Loading..."}</div>
          <div className="mt-4 flex gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button disabled={rejectLoading || acceptLoading}>
                  Accept
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    By accepting this farm invite, you will become a farmer of
                    the farm community. and you will be granted access to view
                    shared resources within the farm.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleAccept}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              variant="outline"
              onClick={handleReject}
              disabled={rejectLoading || acceptLoading}
            >
              Decline
            </Button>
            <Loader isVisible={rejectLoading || acceptLoading} />
          </div>
        </>
      )}
    </div>
  );
};

export default InviteFarm;
