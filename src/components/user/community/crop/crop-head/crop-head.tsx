import React from "react";
import AddCropModal from "../add-crop-modal/add-crop-modal";
import { useParams } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import ArchiveDrawer from "../archive-drawer/archive-drawer";

const CropHead = () => {
  const { id } = useParams();
  const { data } = useAuth();
  const allowedRoles = ["farmer", "farm_head"];
  const isAllowed = allowedRoles.includes(data?.role || "");
  const isMember = id === data?.farm_id;
  return (
    <div className="flex items-center justify-between">
      <h3 className=" font-poppins-medium">Crops</h3>
      {isMember && isAllowed && (
        <div className="flex items-center gap-2">
          <ArchiveDrawer />
          <AddCropModal />
        </div>
      )}
    </div>
  );
};

export default CropHead;
