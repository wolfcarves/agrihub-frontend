import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetReportCropExistingList from "../../../../../hooks/api/get/useGetReportCropExistingList";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../../../components/ui/avatar";
import { format } from "date-fns";
import { PiPlant } from "react-icons/pi";
import {
  CommunityCropReportResponseItem,
  PlantedCropsResponse
} from "../../../../../api/openapi";
import { useDispatch, useSelector } from "../../../../../redux/store";
import {
  clearExistingCrop,
  setExistingCrop
} from "../../../../../redux/slices/existingCropSlice";
import { formatDate } from "../../../../../components/lib/utils";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../../../components/ui/dropdown-menu";
import { Button } from "../../../../../components/ui/button";
import { ChevronDown, CreditCard, User } from "lucide-react";
import { BsClipboardMinus, BsClipboardPlus } from "react-icons/bs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../../../../components/ui/alert-dialog";
import useReportCropInactive from "../../../../../hooks/api/post/useReportCropInactive";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import StatePagination from "../../../../../components/user/community/state-pagination/state-pagination";
import useCommunityAutorization from "../../../../../hooks/utils/useCommunityAutorization";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import Input from "../../../../../components/ui/custom/input/input";
import { IoMdAdd } from "react-icons/io";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import useGetCommunityFarmReportsCropReports from "../../../../../hooks/api/get/useGetCommunityFarmReportsCropReports";

const CropsReportPlantedList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAllowed, isMember } = useCommunityAutorization();
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  const { data: CropExisting, isLoading } =
    useGetCommunityFarmReportsCropReports({
      id: id || "",
      search: search,
      page: String(page),
      perpage: "10",
      filter: filter,
      status: undefined
    });
  console.log(CropExisting, "asdasd");

  const handleCropReport = (cropData: PlantedCropsResponse) => {
    // dispatch(setExistingCrop(cropData));
    navigate(`harvest/${cropData.report_id}`);
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

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
            <IoMdAdd size={15} /> Plant
          </Button>
        </div>
      </div>
      {CropExisting?.data?.length == 0 && (
        <div className=" text-center my-16 text-gray-500">
          No crops currently existing or planted.
        </div>
      )}

      <div className="grid grid-cols-12 gap-3">
        {CropExisting?.data?.map((crop, i) => (
          <DropdownMenu>
            <DropdownMenuTrigger className=" " asChild>
              <div
                key={i}
                className="md:col-span-6 lg:col-span-4 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-main select-none"
              >
                <div
                  // disabled={!isMember}
                  className=" col-span-11 grid grid-cols-11 "
                >
                  <Avatar className="col-span-4 h-full w-full border-r rounded-l-lg object-center">
                    <AvatarImage className="rounded-l-lg" src={crop.image} />
                    <AvatarFallback className="rounded-l-lg text-xl">
                      {crop?.crop_name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="col-span-7 p-2 text-start">
                    <p className="font-semibold text-md">{crop.crop_name}</p>
                    {/* <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1">
                  Harvested Quantity: {crop.harvested_qty}
                </p> */}
                    <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1"></p>
                    {/* <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1">
                  Withered Quantity : {crop.withered_crops}
                </p> */}

                    <p className="flex items-center gap-2 my-2 text-xs font-poppins-semibold text-primary capitalize line-clamp-1">
                      <PiPlant size={18} /> Date Planted :{" "}
                      {formatDate(crop.date_planted || "")}
                    </p>
                    <Button variant="outline">Options</Button>
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Active Crop Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup>
                <DropdownMenuItem onClick={() => handleCropReport(crop)}>
                  <BsClipboardPlus className="mr-2 h-4 w-4" />
                  <span>Add Harvest Report</span>
                </DropdownMenuItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
      {!isLoading && Number(CropExisting?.pagination?.total_records) !== 0 && (
        <StatePagination
          currentPage={Number(CropExisting?.pagination?.page)}
          totalPages={Number(CropExisting?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default CropsReportPlantedList;
