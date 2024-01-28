import React from "react";
import { TooltipProvider } from "../../../../components/ui/tooltip";
import GalleryItems from "../../../../components/user/community/gallery/gallery-items/gallery-items";
import GalleryHead from "../../../../components/user/community/gallery/gallery-head/gallery-head";

const Gallery = () => {
  return (
    <div className="p-5">
      <TooltipProvider>
        <GalleryHead />
        <hr className="my-4" />
        <GalleryItems />
      </TooltipProvider>
    </div>
  );
};

export default Gallery;
