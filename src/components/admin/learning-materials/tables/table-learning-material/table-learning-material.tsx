import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Input } from "@components/ui/input";
import { ChevronDown } from "lucide-react";
import { Button } from "../../../../ui/button";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetLearningPublishedList from "../../../../../hooks/api/get/useGetLearningPublishedList";
import useDebounce from "../../../../../hooks/utils/useDebounce";

const TableLearningMaterial = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: LearningData } = useGetLearningPublishedList({
    perpage: "20",
    page: "1",
    search: search
  });

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search title..."
          className="max-w-sm"
          value={search}
          onChange={e => debouncedSearch(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={LearningData?.data || []} />
    </div>
  );
};

export default TableLearningMaterial;
