import React from "react";
import { PiPlant } from "react-icons/pi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CropItem } from "../../../../../api/openapi";
import useGetReportCropStatsQuery from "../../../../../hooks/api/get/useGetReportCropStatsQuery";
import { toast } from "sonner";
import useAuth from "../../../../../hooks/useAuth";

interface CropCardProps {
  crop: CropItem;
}

const CropCardReport: React.FC<CropCardProps> = ({ crop }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: UserData } = useAuth();
  const isMember = id === UserData?.farm_id;

  const { isError } = useGetReportCropStatsQuery(crop.name || "");

  const handleCropStats = () => {
    if (isError) {
      toast.error("This crop has no reports available");
    } else {
      navigate(`crops/${crop.name}`);
    }
  };
  return (
    <button
      onClick={handleCropStats}
      disabled={!isMember}
      className="md:col-span-4 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-white select-none"
    >
      <img
        src={crop.image}
        alt="plant"
        className="col-span-4 h-[8rem] w-full border-r rounded-lg object-center"
      />
      <div className="col-span-8 p-2 text-start">
        <p className="font-semibold text-md">{crop.name}</p>
        <p className="text-sm text-[#b6b6b6] font-medium">
          Planting Season : {crop.planting_season}
        </p>
        <p className="text-sm text-[#b6b6b6] font-medium">
          Seedling Season : {crop.seedling_season}
        </p>
        <p className="text-sm text-[#b6b6b6] font-medium">
          Harvest Season : {crop.harvest_season}
        </p>
        <p className="flex items-center gap-2 mt-2 text-sm text-primary capitalize">
          <PiPlant size={18} /> Growth Span : {crop.growth_span}
        </p>
      </div>
    </button>
  );
};

export default CropCardReport;
