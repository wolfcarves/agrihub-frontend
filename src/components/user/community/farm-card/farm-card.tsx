import React from "react";
import Logo from "@icons/agrihub-logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Link } from "react-router-dom";
import { CommunityFarmData } from "../../../../api/openapi";
interface FarmCardProps {
  farm: CommunityFarmData;
}
const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  return (
    <Link
      to={`/community/explore/${farm.id}`}
      className={`flex flex-col lg:col-span-2 col-span-6 w-full h-full border rounded-md p-4 shadow-md relative bg-main`}
    >
      <img
        className="absolute z-[1] top-1 right-1"
        src={Logo as unknown as string}
      />
      <div className="flex gap-3">
        <Avatar className="border rounded w-11 h-11 ">
          <AvatarImage
            src={farm?.avatar ?? ""}
            className="object-cover pointer-events-none select-none rounded"
          />
          <AvatarFallback className="rounded">
            {farm?.farm_name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-gray-700 hover:text-black font-poppins-semibold text-md">
            {farm.farm_name}
          </span>
          <span className="text-sm font-poppins-medium text-gray-500">
            {farm.district}
          </span>
        </div>
      </div>
      <p className="text-sm mt-2 line-clamp-2 text-gray-600">
        {farm.description}
      </p>
    </Link>
  );
};

export default FarmCard;
