import React from "react";
import GallerySection from "../../../../components/user/community/overview/gallery-section/gallery-section";
import CropSection from "../../../../components/user/community/overview/crop-section/crop-section";
import ReportSection from "../../../../components/user/community/overview/report-section/report-section";
import useCommunityAutorization from "../../../../hooks/utils/useCommunityAutorization";
import AboutSection from "../../../../components/user/community/overview/about-section/about-section";

const Overview = () => {
  const { isMember, isAllowed } = useCommunityAutorization();
  return (
    <div className="p-4 flex flex-col gap-10 pb-10">
      <AboutSection />
      {isAllowed && isMember && <ReportSection />}
      <CropSection />
      <GallerySection />
    </div>
  );
};

export default Overview;
