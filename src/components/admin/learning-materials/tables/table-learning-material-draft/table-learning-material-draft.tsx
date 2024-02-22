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
import useGetLearningDraftList from "../../../../../hooks/api/get/useGetLearningDraftList";
import { columns } from "./columns";
import useDebounce from "../../../../../hooks/utils/useDebounce";

const TableLearningMaterialDraft = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: LearningData } = useGetLearningDraftList(search, "1", "20");
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

export default TableLearningMaterialDraft;
