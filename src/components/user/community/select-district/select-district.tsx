import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import { district } from "../../../../constants/data";

interface SelectDistrictProps {
  field: {
    onChange: (value: any) => void;
    value: any;
  };
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
}

const SelectDistrict: React.FC<SelectDistrictProps> = ({
  field,
  setDistrict
}) => (
  <Select
    onValueChange={value => {
      field.onChange(value), setDistrict(value);
    }}
    defaultValue={field.value}
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select district..." />
    </SelectTrigger>
    <SelectContent>
      {district.map((id, i) => (
        <SelectItem key={i} value={id}>
          {id}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default SelectDistrict;
