import React from "react";
import { Button } from "@components/ui/button";
import { useParams } from "react-router-dom";
import useGetFarmerInvitation from "@hooks/api/get/useGetFarmerInvitation";

const InviteFarm = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useGetFarmerInvitation({
    id: id ? id : ""
  });

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
          <div className="mt-4 flex gap-2">
            <Button>ACCEPT</Button>
            <Button variant="outline">Decline</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default InviteFarm;
