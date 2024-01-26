import React from "react";
import useGetFarmGalleryQuery from "@hooks/api/get/useGetFarmGalleryQuery";
import { useParams } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../../../components/ui/tooltip";

const Gallery = () => {
  const { id } = useParams();
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");

  return (
    <div className="p-5">
      {/* <h2 className=" font-poppins-medium">Gallery</h2> */}
      <div className="flex gap-3 flex-wrap">
        {farmGallery?.map((gallery, i) => (
          <TooltipProvider>
            <Tooltip key={i}>
              <TooltipTrigger>
                <img
                  className="h-[10rem] rounded hover:shadow-lg"
                  src={gallery.imagesrc}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{gallery.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
