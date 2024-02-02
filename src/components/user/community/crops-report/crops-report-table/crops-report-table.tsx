import React, { useState } from "react";
import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { useNavigate, useParams } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { Button } from "../../../../ui/button";
import { IoMdAdd } from "react-icons/io";
import { Input } from "../../../../ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "../../../../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
const CropsReportTable = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string[]>([]);
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  const navigate = useNavigate();
  const { data: CropReport } = useGetReportCropListQuery({
    id: id || "",
    search: search,
    page: "",
    perpage: undefined,
    filter: filter,
    sort: undefined
  });

  const handleAddReport = () => {
    navigate("add");
  };

  const handleCheckboxChange = (cropName: string, isChecked: boolean) => {
    setFilter(prevFilter => {
      if (isChecked) {
        return [...prevFilter, cropName];
      } else {
        return prevFilter.filter(name => name !== cropName);
      }
    });
  };

  console.log(CropReport, "asdsad");

  return (
    <div>
      <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
        <Input
          placeholder="Search crop..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="max-w-sm focus-visible:ring-0"
        />
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto border-input focus-visible:ring-0"
              >
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {farmCrops?.map((crop, i) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={i}
                    className="capitalize"
                    checked={filter.includes(crop.name)}
                    onCheckedChange={value =>
                      handleCheckboxChange(crop.name, value)
                    }
                  >
                    {crop.name}
                  </DropdownMenuCheckboxItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={handleAddReport} className="flex items-center gap-1">
            <IoMdAdd size={15} /> Report
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={CropReport?.reports || []} />
    </div>
  );
};

export default CropsReportTable;
