import { Input } from "@components/ui/custom/input-admin/input";
import { Label } from "@components/ui/label";
import React from "react";

const FarmActiveDetails = () => {
  return (
    <div>
      {/* line 1 */}
      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <Label>Farm Name</Label>
          <Input type="text" defaultValue="Sharon Farm" readOnly />
        </div>
        <div>
          <Label>Farm Size</Label>
          <Input type="text" defaultValue="560 squared meter" readOnly />
        </div>
      </div>

      {/* line 2 */}
      <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-4">
        <div className="w-full">
          <Label>Street</Label>
          <Input
            type="text"
            defaultValue="80 Prinsipe Tupaz St., Doña Rosario Subdivision,"
            readOnly
          />
        </div>
        <div className="flex gap-4">
          <div>
            <Label>Barangay</Label>
            <Input
              type="text"
              defaultValue="Barangay Novaliches Proper, Quezon City,"
              readOnly
            />
          </div>
          <div>
            <Label>District</Label>
            <Input type="text" defaultValue="District 6" readOnly />
          </div>
        </div>
      </div>

      {/* line 3 */}
      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <Label>Farm Ownership</Label>
          <Input type="text" defaultValue="Government Property" readOnly />
        </div>
        <div>
          <Label>Farm Type</Label>
          <Input type="text" defaultValue="Community Farm" readOnly />
        </div>
      </div>
    </div>
  );
};

export default FarmActiveDetails;
