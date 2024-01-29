import React from "react";
import AddCropModal from "../add-crop-modal/add-crop-modal";
import { useParams } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";

const CropHead = () => {
  const { id } = useParams();
  const { data } = useAuth();
  const allowedRoles = ["farmer", "farm_head"];
  const isAllowed = allowedRoles.includes(data?.role || "");
  const isMember = id === data?.farm_id;
  return (
    <div className="flex items-center justify-between">
      <h3 className=" font-poppins-medium">Crops</h3>
      {isMember && isAllowed && <AddCropModal />}
    </div>
  );
};

export default CropHead;
