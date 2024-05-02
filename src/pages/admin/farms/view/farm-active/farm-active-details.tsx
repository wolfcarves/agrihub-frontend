import { Input } from "@components/ui/custom/input-admin/input";
import { Label } from "@components/ui/label";
import React from "react";
import { useParams } from "react-router-dom";
import useGetFarmViewQuery from "../../../../../hooks/api/get/useGetFarmViewQuery";
import Loader from "../../../../../icons/Loader";

const FarmActiveDetails = () => {
  const { id } = useParams();
  const { data: farmDetails, isLoading } = useGetFarmViewQuery(id || "");
  return (
    <div>
      {/* line 1 */}
      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <Label>Farm Name</Label>
          <Input type="text" defaultValue={farmDetails?.farm_name} readOnly />
        </div>
        <div>
          <Label>Farm Size</Label>
          <Input type="text" defaultValue={farmDetails?.size} readOnly />
        </div>
      </div>

      {/* line 2 */}
      <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-4">
        <div className="w-full">
          <Label>Street</Label>
          <Input type="text" defaultValue={farmDetails?.location} readOnly />
        </div>
        <div className="flex gap-4">
          <div>
            <Label>District</Label>
            <Input type="text" defaultValue={farmDetails?.district} readOnly />
          </div>
        </div>
      </div>

      {/* line 3 */}
      {/* <div className="flex gap-4 mb-4">
        <div className="w-full">
          <Label>Farm Ownership</Label>
          <Input type="text" defaultValue={farmDetails.} readOnly />
        </div>
        <div>
          <Label>Farm Type</Label>
          <Input type="text" defaultValue="Community Farm" readOnly />
        </div>
      </div> */}
      <Loader isVisible={isLoading} />
    </div>
  );
};

export default FarmActiveDetails;
