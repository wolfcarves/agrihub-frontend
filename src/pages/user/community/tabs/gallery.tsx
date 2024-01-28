import React from "react";
import useGetFarmGalleryQuery from "@hooks/api/get/useGetFarmGalleryQuery";
import { useParams } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../../../components/ui/tooltip";
import AddImageModal from "../../../../components/user/community/gallery/add-image-modal/add-image-modal";
import DeleteImageAlert from "../../../../components/user/community/gallery/delete-image-modal/delete-image-alert";
import useAuth from "../../../../hooks/useAuth";

const Gallery = () => {
  const { id } = useParams();
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");
  const { data } = useAuth();
  const allowedRoles = ["farmer", "farm_head"];
  const isAllowed = allowedRoles.includes(data?.role || "");
  console.log(isAllowed);
  return (
    <div className="p-5">
      <TooltipProvider>
        <div className="flex justify-between items-center">
          <h3 className=" font-poppins-medium">Gallery</h3>
          {isAllowed && <AddImageModal />}
        </div>
        <hr className="my-4" />
        <div className="flex gap-3 flex-wrap">
          {farmGallery?.map((gallery, i) => (
            <Tooltip key={i}>
              <TooltipTrigger className="relative">
                <img
                  className="h-[10rem] rounded hover:shadow-lg"
                  src={gallery.imagesrc}
                />
                {isAllowed && <DeleteImageAlert imageId={gallery.id} />}
              </TooltipTrigger>
              <TooltipContent>
                <p>{gallery.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Gallery;
