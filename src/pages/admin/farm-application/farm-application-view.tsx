import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetFarmApplication from "../../../hooks/api/get/useGetFarmApplication";
import AdminOutletContainer from "../../../components/admin/layout/container/AdminOutletContainer";
import { timeAgo } from "../../../components/lib/utils";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import useFarmAcceptApplicationMutation from "../../../hooks/api/post/useFarmAcceptApplicationMutation";
import useFarmRejectApplicationMutation from "../../../hooks/api/post/useFarmRejectApplicationMutation";

const FarmApplicationView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetFarmApplication(id || "");
  const { mutateAsync: farmAcceptMutate } = useFarmAcceptApplicationMutation();
  const { mutateAsync: farmRejectMutate } = useFarmRejectApplicationMutation();

  const handleAcceptApplication = async () => {
    try {
      await farmAcceptMutate(id || "");

      toast.info(`Successfully accepted farm application`);
      navigate(`/admin/farm/application`);
    } catch (error: any) {}
  };
  const handleRejectApplication = async () => {
    try {
      await farmRejectMutate(id || "");

      toast.info(`Farm application rejected`);
      navigate(`/admin/farm/application`);
    } catch (error: any) {}
  };
  return (
    <AdminOutletContainer>
      <h2 className="text-3xl font-bold tracking-tight">
        View Farm Applications
      </h2>
      <h5 className="mt-8 mb-2 font-bold">Farm Head</h5>
      <div className="flex gap-2">
        <img
          src={data?.applicant.avatar}
          className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg select-none"
        />
        <div>
          <h6 className="font-poppins-medium hover:opacity-80">{`${data?.applicant.firstname} ${data?.applicant.lastname}`}</h6>
          <p className="text-gray-400 text-sm">
            {timeAgo(data?.createdat || "")}
          </p>
        </div>
      </div>
      <h5 className="mt-8 mb-2 font-bold">Farm Details</h5>
      <h6>{data?.farm_name}</h6>
      <h6>{data?.farm_size}</h6>
      <h6>{data?.location}</h6>
      <Button onClick={handleAcceptApplication}>Accept</Button>
      <Button onClick={handleRejectApplication}>Reject</Button>
    </AdminOutletContainer>
  );
};

export default FarmApplicationView;
