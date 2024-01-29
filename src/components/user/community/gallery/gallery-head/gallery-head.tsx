import React from "react";
import useAuth from "../../../../../hooks/useAuth";
import AddImageModal from "../add-image-modal/add-image-modal";
import { useParams } from "react-router-dom";

const GalleryHead = () => {
  const { id } = useParams();
  const { data } = useAuth();
  const allowedRoles = ["farmer", "farm_head"];
  const isAllowed = allowedRoles.includes(data?.role || "");
  const isMember = id === data?.farm_id;
  return (
    <div className="flex justify-between items-center">
      <h3 className=" font-poppins-medium">Gallery</h3>
      {isMember && isAllowed && <AddImageModal />}
    </div>
  );
};

export default GalleryHead;
