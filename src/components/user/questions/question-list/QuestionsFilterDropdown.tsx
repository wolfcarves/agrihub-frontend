import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";

const FilterDropdownContent = [
  {
    label: "Newest",
    value: "newest"
  },
  {
    label: "Active",
    value: "active"
  },
  {
    label: "Trending",
    value: "trending"
  }
];

interface QuestionsFilterProps {
  onFilterChange?: (filterKey: "newest" | "active" | "trending") => void;
  filter: "newest" | "active" | "trending";
}

function QuestionsFilterDropdown({
  onFilterChange,
  filter
}: QuestionsFilterProps) {
  return (
    <Select onValueChange={onFilterChange}>
      <SelectTrigger className="w-[120px]  rounded-lg text-neutral-700 font-poppins-medium capitalize h-11 bg-white">
        <SelectValue placeholder={filter} />
      </SelectTrigger>

      <SelectContent>
        {FilterDropdownContent.map(({ label, value }) => (
          <SelectItem
            key={`${value}`}
            value={value}
            className="text-neutral-700 font-poppins-medium cursor-pointer"
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default QuestionsFilterDropdown;
