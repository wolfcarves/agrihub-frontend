import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";

interface QuestionsFilterProps {
  onFilterChange: (filterKey: "newest" | "active" | "trending") => void;
  filter: "newest" | "active" | "trending";
}

function QuestionsFilter({ onFilterChange, filter }: QuestionsFilterProps) {
  return (
    <Select onValueChange={onFilterChange}>
      <SelectTrigger className="w-[150px] font-semibold capitalize h-11">
        <SelectValue placeholder={filter} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="trending">Trending</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default QuestionsFilter;
