import React from "react";
import GallerySection from "../../../../components/user/community/overview/gallery-section/gallery-section";
import CropSection from "../../../../components/user/community/overview/crop-section/crop-section";
import ReportSection from "../../../../components/user/community/overview/report-section/report-section";
import useAuth from "../../../../hooks/useAuth";
import { useParams } from "react-router-dom";

const Overview = () => {
  const { data } = useAuth();
  const { id } = useParams();
  const allowedMember = ["farm_head", "farmer"];
  const isAllowed = allowedMember.includes(data?.role || "");
  const isMember = id === data?.farm_id;
  return (
    <div className="p-4 flex flex-col gap-10">
      {isAllowed && isMember && <ReportSection />}
      <CropSection />
      <GallerySection />
    </div>
  );
};

export default Overview;
