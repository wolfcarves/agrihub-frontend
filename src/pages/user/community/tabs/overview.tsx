import React from "react";
import GallerySection from "../../../../components/user/community/overview/gallery-section/gallery-section";
import CropSection from "../../../../components/user/community/overview/crop-section/crop-section";

const Overview = () => {
  return (
    <div className="p-4 flex flex-col gap-10">
      <CropSection />
      <GallerySection />
    </div>
  );
};

export default Overview;
