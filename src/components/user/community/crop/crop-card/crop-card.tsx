import React from "react";
import { PiPlant } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CropItem } from "../../../../../api/openapi";

interface CropCardProps {
  crop: CropItem;
  key: number;
}

const CropCard: React.FC<CropCardProps> = ({ crop, key }) => {
  return (
    <Link
      to={`/community/crop/${crop.name}`}
      key={key}
      className="md:col-span-4 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-white select-none"
    >
      <img
        src={crop.image}
        alt="plant"
        className="col-span-4 h-[8rem] w-full border-r rounded-lg object-center"
      />
      <div className="col-span-8 p-2">
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
    </Link>
  );
};

export default CropCard;
