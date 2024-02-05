import React from "react";
import { Button } from "@components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import useGetFarmerInvitation from "@hooks/api/get/useGetFarmerInvitation";
import useFarmAcceptInvitationMutation from "../../../hooks/api/post/useFarmAcceptInvitationMutation";
import { toast } from "sonner";
import useFarmRejectInvitationMutation from "../../../hooks/api/post/useFarmRejectInvitationMutation";
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

      navigate(`/community/my-community/${data?.id}`);
    } catch (error) {
      toast.error("Invitation Error");
    }
  };

  const handleReject = async () => {
    try {
      await rejectMutate(id ? id : "");
      navigate("/");
    } catch (error) {
      toast.error("Invitation Error");
    }
  };

  if (isLoading) return "Loading ...";
  return (
    <div className="h-screen w-full flex flex-col mt-20 items-center">
      {isError ? (
        <>
          <div className="text-xl">This invitation has expired. :( </div>
        </>
      ) : (
        <>
          <img
            className="w-32 h-32 rounded-full mb-4"
            src="https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/eec871225febb932.jpg"
            alt="farm"
          />
          <div className="text-lg text-center">
            You're invited to become a part of the community by
            <span className="text-green-800 font-bold"> {data.farm_name}</span>
          </div>
          <div>{acceptLoading && "Loading..."}</div>
          <div>{rejectLoading && "Loading..."}</div>
          <div className="mt-4 flex gap-2">
            <Button
              onClick={handleAccept}
              disabled={rejectLoading || acceptLoading}
            >
              ACCEPT
            </Button>
            <Button
              variant="outline"
              onClick={handleReject}
              disabled={rejectLoading || acceptLoading}
            >
              Decline
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default InviteFarm;
