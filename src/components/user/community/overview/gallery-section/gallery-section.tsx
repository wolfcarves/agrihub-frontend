import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetFarmGalleryQuery from "../../../../../hooks/api/get/useGetFarmGalleryQuery";
import { IoChevronForward } from "react-icons/io5";
import { TfiGallery } from "react-icons/tfi";
import useCommunityAutorization from "@hooks/utils/useCommunityAutorization";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@components/ui/tooltip";
import ImgModal from "@components/ui/custom/img-modal/Modal";
import { Card } from "@components/ui/card";
import { formatDateTime } from "@components/lib/utils";
import { Button } from "@components/ui/button";
import DeleteImageAlert from "../../gallery/delete-image-modal/delete-image-alert";
const DisplayNone = () => {
  return (
    <div className="text-center min-h-32">
      <p className=" text-gray-400">No images found for this farm.</p>
    </div>
  );
};

const GallerySection = () => {
  const { id } = useParams();
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");
  const { isAllowed, isMember } = useCommunityAutorization();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNextClick = () => {
    if (selectedImageIndex !== null && farmGallery) {
      const nextIndex = (selectedImageIndex + 1) % farmGallery.length;
      setSelectedImageIndex(nextIndex);
    }
  };

  const handlePreviousClick = () => {
    if (selectedImageIndex !== null && farmGallery) {
      const previousIndex =
        (selectedImageIndex - 1 + farmGallery.length) % farmGallery.length;
      setSelectedImageIndex(previousIndex);
    }
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  if (!farmGallery?.length || farmGallery.length === 0) {
    return (
      <div className="text-center">
        <p className="text-gray-400">No images found for this farm.</p>
      </div>
    );
  }

  return (
    <div>
      <h4 className=" font-poppins-medium mb-4 flex items-center gap-1">
        <TfiGallery className="text-primary text-lg" />
        Gallery Overview
      </h4>
      {!farmGallery?.length || 0 < 0 ? (
        <DisplayNone />
      ) : (
        <>
          <div className="flex justify-center gap-3 flex-wrap">
            {farmGallery?.slice(0, 5).map((gallery, i) => (
              <TooltipProvider>
                <Tooltip key={i}>
                  <TooltipTrigger className="relative">
                    <img
                      className="h-[10rem] rounded hover:shadow-lg"
                      src={gallery.imagesrc}
                      alt={gallery.description}
                      onClick={() => handleImageClick(i)}
                    />
                    {isMember && isAllowed && (
                      <DeleteImageAlert imageId={gallery.id} />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{gallery.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
            {selectedImageIndex !== null && (
              <ImgModal setModal={closeModal}>
                <Card className="mb-2 flex flex-col max-w-5xl lg:flex-row bg-[#f5f5f5] justify-between m-3">
                  <div className="w-full lg:w-3/5 flex justify-end">
                    <img
                      src={farmGallery[selectedImageIndex].imagesrc}
                      alt="Full View"
                      className="max-w-full"
                    />
                  </div>
                  <div className="lg:w-2/5 w-full h-auto items-end flex">
                    <div className="w-full">
                      <h2 className="text-xl font-bold mt-4 mx-4">
                        {farmGallery[selectedImageIndex].description}
                      </h2>
                      <span className="block text-base mx-4">
                        uploaded:{" "}
                        {formatDateTime(
                          farmGallery[selectedImageIndex].createdat
                        )}
                      </span>
                      <div className="flex justify-between my-4 mx-4">
                        <Button onClick={handlePreviousClick} variant="outline">
                          Previous
                        </Button>
                        <Button onClick={handleNextClick} variant="outline">
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </ImgModal>
            )}
          </div>
          <div className="flex justify-end mt-2">
            <Link
              to={"gallery"}
              className="flex flex-row  items-center text-green-700 leading-none hover:underline"
            >
              See more <IoChevronForward size={18} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default GallerySection;
