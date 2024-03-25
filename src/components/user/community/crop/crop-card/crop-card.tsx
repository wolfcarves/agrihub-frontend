import React from "react";
import { PiPlant } from "react-icons/pi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CropItem } from "../../../../../api/openapi";
import useGetReportCropStatsQuery from "../../../../../hooks/api/get/useGetReportCropStatsQuery";
import { toast } from "sonner";
import useAuth from "../../../../../hooks/useAuth";
import ArchiveCropAlert from "../archive-crop-alert/archive-crop-alert";
import useCommunityAutorization from "../../../../../hooks/utils/useCommunityAutorization";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../ui/avatar";

interface CropCardProps {
  crop: CropItem;
}

const CropCard: React.FC<CropCardProps> = ({ crop }) => {
  const navigate = useNavigate();
  const { isAllowed, isMember } = useCommunityAutorization();
  const { isError } = useGetReportCropStatsQuery(crop.name || "");
  const handleCropStats = () => {
    if (isError) {
      toast.error("This crop has no reports available");
    } else {
      navigate(`${crop.name}`);
    }
  };

  return (
    <div className="md:col-span-6 lg:col-span-4 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-white select-none">
      <button
        onClick={handleCropStats}
        disabled={!isMember}
        className=" col-span-11 grid grid-cols-11"
      >
        {/* <img
          src={crop.image}
          alt="plant"
          className="col-span-4 h-[8rem] w-full border-r rounded-lg object-center"
        /> */}
        <Avatar className="col-span-4 h-[8rem] w-full border-r rounded object-center">
          <AvatarImage className="rounded" src={crop.image} />
          <AvatarFallback className="rounded text-xl">
            {crop?.name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="col-span-7 p-2 text-start">
          <p className="font-semibold text-md">{crop.name}</p>
          <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1">
            Planting Season : {crop.planting_season}
          </p>
          <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1">
            Seedling Season : {crop.seedling_season}
          </p>
          <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1">
            Harvest Season : {crop.harvest_season}
          </p>
          {crop.growth_span !== "null month" && (
            <p className="flex items-center gap-2 mt-2 text-sm text-primary capitalize line-clamp-1">
              <PiPlant size={18} /> Growth Span : {crop.growth_span}
            </p>
          )}
        </div>
      </button>
      <div className=" col-span-1">
        {isAllowed && isMember && <ArchiveCropAlert cropId={crop.id} />}
      </div>
    </div>
  );
};

export default CropCard;
