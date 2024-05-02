import React, { useMemo, useState } from "react";
import { columns } from "./columns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import { Input } from "../../../ui/input";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useGetCommunityFarmReportsCropReports from "../../../../hooks/api/get/useGetCommunityFarmReportsCropReports";
import { useDispatch } from "react-redux";
import useGetFarmCropsQuery from "../../../../hooks/api/get/useGetFarmCropsQuery";
import useDebounce from "../../../../hooks/utils/useDebounce";
import { clearExistingCrop } from "../../../../redux/slices/existingCropSlice";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import { ChevronDown } from "lucide-react";
import { IoMdAdd } from "react-icons/io";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import StatePagination from "../../../user/community/state-pagination/state-pagination";

const CropsReportTable = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [monthSelected, setMonthSelected] = useState<string | undefined>(
    undefined
  );
  const [orderSelected, setOrderSelected] = useState<
    "asc" | "desc" | undefined
  >(undefined);
  const { id } = useParams();
  const { data: userData } = useAuth();

  const { data: CropHarvested, isLoading } =
    useGetCommunityFarmReportsCropReports({
      id: id || "",
      search: search,
      page: String(page),
      perpage: "10",
      filter: filter,
      status: "harvested",
      month: monthSelected,
      order: orderSelected
    });
  const { data: CropReportExport } = useGetCommunityFarmReportsCropReports({
    id: id || "",
    page: "1",
    perpage: "100000",
    filter: filter,
    status: "harvested",
    month: monthSelected,
    order: orderSelected
  });

  const reportData = useMemo(() => {
    return (
      CropReportExport?.data?.map(item => ({
        crop_name: item.crop_name || "", // Add default value to handle undefined
        date_planted: item.date_planted || "", // Add default value to handle undefined
        harvested_qty: item.harvested_qty || "", // Add default value to handle undefined
        planted_qty: item.planted_qty || "", // Add default value to handle undefined
        withered_crops: item.withered_crops || "" // Add default value to handle undefined
      })) || []
    );
  }, [CropReportExport]);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  const handleAddReport = () => {
    dispatch(clearExistingCrop());
    navigate("plant");
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

  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];
  const headers = [
    { label: "Crop Name", key: "crop_name" },
    { label: "Date Planted", key: "date_planted" },
    { label: "Harvested Quantity", key: "harvested_qty" },
    { label: "Planted Quantity", key: "planted_qty" },
    { label: "Withered Quantity", key: "withered_crops" }
  ];

  const currentDate = new Date();
  const currentDateTime = currentDate.toISOString();

  return (
    <div>
      <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
        <Input
          placeholder="Search crop..."
          onChange={e => debouncedSearch(e.target.value)}
          className="max-w-sm focus-visible:ring-0"
        />
        <div className="flex items-center gap-2">
          <Select
            onValueChange={value =>
              setMonthSelected(value === "all" ? undefined : value)
            }
            defaultValue="all"
          >
            <SelectTrigger className="w-auto focus-visible:ring-0">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent className=" max-h-[40vh]">
              <SelectItem value={"all"}>All</SelectItem>
              {months.map(month => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={value => setOrderSelected(value as "asc" | "desc")}
            defaultValue="asc"
          >
            <SelectTrigger className="w-auto focus-visible:ring-0">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent className=" max-h-[40vh]">
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto border-input focus-visible:ring-0"
              >
                Filter Crops <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="max-h-[40vh] overflow-y-auto custom-scroll"
            >
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

          {userData?.role === "farm_head" && (
            <Button
              onClick={handleAddReport}
              className="flex items-center gap-1"
            >
              <IoMdAdd size={15} /> Plant
            </Button>
          )}
        </div>
      </div>
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={CropHarvested?.data || []} />
      </div>
      {!isLoading && Number(CropHarvested?.pagination?.total_records) !== 0 && (
        <StatePagination
          currentPage={Number(CropHarvested?.pagination?.page)}
          totalPages={Number(CropHarvested?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default CropsReportTable;
