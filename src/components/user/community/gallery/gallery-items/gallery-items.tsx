import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetFarmGalleryQuery from "../../../../../hooks/api/get/useGetFarmGalleryQuery";
import useAuth from "../../../../../hooks/useAuth";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "../../../../ui/tooltip";
import DeleteImageAlert from "../delete-image-modal/delete-image-alert";
import useCommunityAutorization from "../../../../../hooks/utils/useCommunityAutorization";
import ImgModal from "../../../../ui/custom/img-modal/Modal";
import { CropGalleryItem } from "../../../../../api/openapi";

const GalleryItems = () => {
  const { id } = useParams();
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");
  const { isAllowed, isMember } = useCommunityAutorization();
  const [selectedImage, setSelectedImage] = useState<CropGalleryItem | null>(
    null
  );

  const handleImageClick = (image: CropGalleryItem) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
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
              onClick={() => handleImageClick(gallery)}
            />
            {isMember && isAllowed && <DeleteImageAlert imageId={gallery.id} />}
          </TooltipTrigger>
          <TooltipContent>
            <p>{gallery.description}</p>
          </TooltipContent>
        </Tooltip>
      ))}
      {selectedImage && (
        <ImgModal setModal={closeModal}>
          <p className=" text-gray-700 font-poppins-medium text-center mb-3">
            {selectedImage.description}
          </p>
          <img
            src={selectedImage.imagesrc}
            alt="Full View"
            className="max-w-full h-[20rem] max-h-full"
          />
        </ImgModal>
      )}
    </div>
  );
};

export default GalleryItems;
