import React, { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import {
  district1,
  district2,
  district3,
  district4,
  district5,
  district6
} from "../../../../constants/data";

interface SelectBarangayProps {
  field: {
    onChange: (value: any) => void;
    value: any;
  };
  district: string;
}

const SelectBarangay: React.FC<SelectBarangayProps> = ({ field, district }) => {
  const getBarangayOptions = useMemo(() => {
    switch (district) {
      case "District 1":
        return district1;
      case "District 2":
        return district2;
      case "District 3":
        return district3;
      case "District 4":
        return district4;
      case "District 5":
        return district5;
      case "District 6":
        return district6;
      default:
        return [];
    }
  }, [district]);

  return (
    <Select
      onValueChange={field.onChange}
      defaultValue={field.value}
      disabled={!district}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select barangay..." />
      </SelectTrigger>
      <SelectContent>
        {getBarangayOptions.map((id, i) => (
          <SelectItem key={i} value={id}>
            {id}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectBarangay;
