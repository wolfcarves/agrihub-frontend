import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import { validId } from "../../../../constants/data";

interface SelectIdProps {
  field: {
    onChange: (value: any) => void;
    value: any;
  };
}

const SelectId: React.FC<SelectIdProps> = ({ field }) => (
  <Select onValueChange={field.onChange} defaultValue={field.value}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select valid id type..." />
    </SelectTrigger>
    <SelectContent>
      {validId.map((id, i) => (
        <SelectItem key={i} value={id}>
          {id}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default SelectId;
