import React from "react";
import { useParams } from "react-router-dom";
import useGetFarmGalleryQuery from "../../../../../hooks/api/get/useGetFarmGalleryQuery";
import useAuth from "../../../../../hooks/useAuth";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "../../../../ui/tooltip";
import DeleteImageAlert from "../delete-image-modal/delete-image-alert";

const GalleryItems = () => {
  const { id } = useParams();
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");
  const { data } = useAuth();
  const isMember = id === data?.farm_id;
  const allowedRoles = ["farmer", "farm_head"];
  const isAllowed = allowedRoles.includes(data?.role || "");
  if (!farmGallery?.length || 0 > 0) {
    return (
      <div className="text-center">
        <p className=" text-gray-400">No images found for this farm.</p>
      </div>
    );
  }
  return (
    <div className="flex gap-3 flex-wrap">
      {farmGallery?.map((gallery, i) => (
        <Tooltip key={i}>
          <TooltipTrigger className="relative">
            <img
              className="h-[10rem] rounded hover:shadow-lg"
              src={gallery.imagesrc}
            />
            {isMember && isAllowed && <DeleteImageAlert imageId={gallery.id} />}
          </TooltipTrigger>
          <TooltipContent>
            <p>{gallery.description}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default GalleryItems;
