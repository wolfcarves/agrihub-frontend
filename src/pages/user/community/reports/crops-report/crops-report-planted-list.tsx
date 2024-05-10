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
import { ChevronDown } from "lucide-react";
import { BsClipboardPlus } from "react-icons/bs";
import StatePagination from "../../../../../components/user/community/state-pagination/state-pagination";
import useCommunityAutorization from "../../../../../hooks/utils/useCommunityAutorization";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import Input from "../../../../../components/ui/custom/input/input";
import { IoMdAdd } from "react-icons/io";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import useGetCommunityFarmReportsCropReports from "../../../../../hooks/api/get/useGetCommunityFarmReportsCropReports";
import useAuth from "../../../../../hooks/useAuth";
import { GiFruitTree } from "react-icons/gi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../../components/ui/select";
import { MdHistory } from "react-icons/md";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "../../../../../components/ui/drawer";
import useGetCommunityFarmReportsHistory from "../../../../../hooks/api/get/useGetCommunityFarmReportsHistory";
import CropsReportHistoryTable from "../../../../../components/user/community/crops-report/crops-report-history/crops-report-history-table";
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
import useDeleteCommunityFarmReportExisting from "../../../../../hooks/api/delete/useDeleteCommunityFarmReportExisting";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";

const CropsReportPlantedList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isAllowed, isMember } = useCommunityAutorization();
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
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  const { data: userData } = useAuth();

  const { data: CropExisting, isLoading } =
    useGetCommunityFarmReportsCropReports({
      id: id || "",
      search: search,
      page: String(page),
      perpage: "10",
      filter: filter,
      status: "planted",
      order: orderSelected,
      month: monthSelected
    });
  console.log(CropExisting);

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

  const { mutateAsync: deleteMutate, isLoading: deleteLoading } =
    useDeleteCommunityFarmReportExisting();

  const handleDelete = async (id: string) => {
    try {
      await deleteMutate(id);
      toast.success("Crop Removed In Planted List Successfully!");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();

  const add7Day = (date: string) => {
    const inputedData = new Date(date);

    const updatedDate = new Date(
      inputedData.setDate(inputedData.getDate() + 7)
    );

    return updatedDate.toISOString();
  };

  const dec7Day = (date: string) => {
    const inputedData = new Date(date);

    const updatedDate = new Date(
      inputedData.setDate(inputedData.getDate() - 7)
    );

    return updatedDate.toISOString();
  };

  const checkGreater = (date: string) => {
    const check = date <= formattedDate;
    return check;
  };

  return (
    <div>
      <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
        <Input
          placeholder="Search crop..."
          onChange={e => debouncedSearch(e.target.value)}
          className="max-w-sm focus-visible:ring-0"
        />
        <div className="flex flex-wrap items-center gap-2">
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
      {CropExisting?.data?.length == 0 && (
        <div className=" text-center my-16 text-gray-500">
          No crops currently existing or planted.
        </div>
      )}

      <div className="grid grid-cols-12 gap-3 mb-2">
        {CropExisting?.data?.map((crop, i) => (
          <div
            key={i}
            className={` relative   lg:col-span-6 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-main select-none ${
              checkGreater(crop.expected_harvest_date || "") &&
              "border-4 border-primary"
            }`}
          >
            <div
              // disabled={!isMember}
              className=" col-span-12 grid grid-cols-11 "
            >
              <Avatar className="col-span-4 h-full w-full border-r rounded-l-lg object-center">
                <AvatarImage
                  className="rounded-l-lg object-cover"
                  src={crop.image}
                />
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

                <p className="flex items-center gap-2 my-2 text-xs font-poppins-semibold text-gray-400 capitalize line-clamp-1">
                  <PiPlant size={18} /> Date Planted :{" "}
                  {formatDate(crop.date_planted || "")}
                </p>
                {crop.batch && (
                  <p className="flex items-center gap-2 my-2 text-xs font-poppins-semibold text-gray-400 capitalize line-clamp-1">
                    <PiPlant size={18} /> Last Harvest Date :{" "}
                    {formatDate(crop.batch || "")}
                  </p>
                )}
                <p
                  className={`flex items-center gap-2 my-2 text-xs font-poppins-semibold ${
                    (crop.batch
                      ? add7Day(crop.batch)
                      : crop.expected_harvest_date || "") <= formattedDate
                      ? "text-primary"
                      : " text-destructive"
                  } capitalize line-clamp-1`}
                >
                  <GiFruitTree size={18} /> Expected Harvest :{" "}
                  {crop.batch
                    ? formatDate(add7Day(crop.batch))
                    : formatDate(crop.expected_harvest_date || "")}
                </p>

                <p
                  className={`flex items-center gap-2 my-2 text-xs font-poppins-semibold ${
                    (crop.batch
                      ? add7Day(crop.batch)
                      : crop.expected_harvest_date || "") <= formattedDate
                      ? "text-primary"
                      : add7Day(crop.expected_harvest_date || "") <=
                        formattedDate
                      ? "text-orange-500"
                      : " text-destructive"
                  } capitalize line-clamp-1`}
                >
                  Status :{" "}
                  {(crop.batch
                    ? add7Day(crop.batch)
                    : crop.expected_harvest_date || "") <= formattedDate
                    ? "Ready For Harvest"
                    : checkGreater(
                        crop.batch
                          ? add7Day(crop.batch)
                          : dec7Day(crop.expected_harvest_date || "") || ""
                      )
                    ? "Ready For Early Harvest"
                    : crop.expected_harvest_date &&
                      crop.expected_harvest_date >= formattedDate
                    ? "Not Ready For Harvest"
                    : null}
                </p>
                {userData?.role === "farm_head" && (
                  <div className=" flex gap-2">
                    <Button
                      // disabled={userData?.role === "farm_head" ? false : true}
                      disabled={
                        checkGreater(
                          crop.batch
                            ? add7Day(crop.batch)
                            : dec7Day(crop.expected_harvest_date || "") || ""
                        ) && userData?.role === "farm_head"
                          ? false
                          : true
                      }
                      variant="outline"
                      onClick={() => handleCropReport(crop)}
                    >
                      {" "}
                      Harvest
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Remove</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Do you want to remove this crop in the plant list?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action will remove the crop in the current list
                            of planted crop in your community
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(crop.report_id || "")}
                            className=" bg-destructive"
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                )}
              </div>
            </div>
            <div className=" absolute right-0">
              {crop.last_harvest_id && (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="p-3">
                      <MdHistory size={20} />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="px-10 w-full h-[80vh]">
                      <DrawerHeader>
                        <DrawerTitle>Harvest History</DrawerTitle>
                        <DrawerDescription>
                          This is the harvest history for this crop.
                        </DrawerDescription>
                      </DrawerHeader>
                      <CropsReportHistoryTable prevId={crop.last_harvest_id} />
                    </div>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
          </div>
        ))}
      </div>
      {!isLoading && Number(CropExisting?.pagination?.total_records) !== 0 && (
        <StatePagination
          currentPage={Number(CropExisting?.pagination?.page)}
          totalPages={Number(CropExisting?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      )}
      <Loader isVisible={deleteLoading} />
    </div>
  );
};

export default CropsReportPlantedList;
