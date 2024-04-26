import React, { useMemo, useState } from "react";
import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import StatePagination from "../../state-pagination/state-pagination";
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
import useCommunityAutorization from "../../../../../hooks/utils/useCommunityAutorization";
import { useNavigate, useParams } from "react-router-dom";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { useDispatch } from "../../../../../redux/store";
import { clearExistingCrop } from "../../../../../redux/slices/existingCropSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import { CSVLink } from "react-csv";
import { PiFileCsvFill } from "react-icons/pi";

const CropsReportTable = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [monthSelected, setMonthSelected] = useState<string | undefined>(
    undefined
  );
  const { id } = useParams();

  const { data: CropReport, isLoading } = useGetReportCropListQuery({
    id: id || "",
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter,
    sort: undefined,
    month: monthSelected
  });

  const { data: CropReportExport } = useGetReportCropListQuery({
    id: id || "",

    page: "1",
    perpage: "100000",
    filter: filter,
    sort: undefined,
    month: monthSelected
  });

  const reportData = useMemo(() => {
    return (
      CropReportExport?.reports?.map(item => ({
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
  const { isAllowed, isMember } = useCommunityAutorization();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  const handleAddReport = () => {
    dispatch(clearExistingCrop());
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
          value={search}
          onChange={e => debouncedSearch(e.target.value)}
          className="max-w-sm focus-visible:ring-0"
        />
        <div className="flex items-center gap-2">
          <Button>
            <CSVLink
              className="flex items-center gap-1"
              data={reportData}
              headers={headers}
              filename={`crop-report-${currentDateTime}.csv`}
            >
              <PiFileCsvFill size={18} /> Export
            </CSVLink>
          </Button>
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
          {isAllowed && isMember && (
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
          )}

          <Button onClick={handleAddReport} className="flex items-center gap-1">
            <IoMdAdd size={15} /> Report
          </Button>
        </div>
      </div>
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={CropReport?.reports || []} />
      </div>
      {!isLoading && Number(CropReport?.pagination?.total_records) !== 0 && (
        <StatePagination
          currentPage={Number(CropReport?.pagination?.page)}
          totalPages={Number(CropReport?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default CropsReportTable;
