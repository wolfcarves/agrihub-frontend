import React from "react";
import useAuth from "../../../../../hooks/useAuth";
import AddImageModal from "../add-image-modal/add-image-modal";

const GalleryHead = () => {
  const { data } = useAuth();
  const allowedRoles = ["farmer", "farm_head"];
  const isAllowed = allowedRoles.includes(data?.role || "");
  return (
    <div className="flex justify-between items-center">
      <h3 className=" font-poppins-medium">Gallery</h3>
      {isAllowed && <AddImageModal />}
    </div>
  );
};

export default GalleryHead;
