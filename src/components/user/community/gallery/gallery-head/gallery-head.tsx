import React from "react";
import AddImageModal from "../add-image-modal/add-image-modal";
import useCommunityAutorization from "@hooks/utils/useCommunityAutorization";

const GalleryHead = () => {
  const { isMember, isAllowed } = useCommunityAutorization();

  return (
    <div className="flex justify-between items-center">
      <h3 className=" font-poppins-medium">Gallery</h3>
      {isMember && isAllowed && <AddImageModal />}
    </div>
  );
};

export default GalleryHead;
