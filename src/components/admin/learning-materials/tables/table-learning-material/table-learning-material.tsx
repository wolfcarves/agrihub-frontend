import React from "react";
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

const TableLearningMaterial = () => {
  const { data: LearningData } = useGetLearningDraftList(
    undefined,
    undefined,
    undefined
  );
  console.log(LearningData, "asdasd");
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input placeholder="Search title..." className="max-w-sm" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem className="capitalize">
              Test
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DataTable columns={columns} data={LearningData?.data || []} />
    </div>
  );
};

export default TableLearningMaterial;
