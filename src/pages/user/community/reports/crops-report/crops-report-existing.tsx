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
import { CommunityCropReportResponseItem } from "../../../../../api/openapi";
import { useDispatch, useSelector } from "../../../../../redux/store";
import { setExistingCrop } from "../../../../../redux/slices/existingCropSlice";
import { formatDate } from "../../../../../components/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../../../components/ui/dropdown-menu";
import { Button } from "../../../../../components/ui/button";
import { CreditCard, User } from "lucide-react";
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
import Header from "../../../../../components/user/community/crops-report/crops-report-table/header";

const CropsReportExisting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const { id } = useParams();

  const { data: CropExisting, isLoading } = useGetReportCropExistingList({
    id: id || "",
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter,
    sort: undefined
  });
  console.log(CropExisting);

  const handleCropReport = (cropData: CommunityCropReportResponseItem) => {
    // dispatch(setExistingCrop(cropData));
    navigate(`add/${cropData.crop_id}`);
  };

  const { mutateAsync: inactiveMutation, isLoading: inactiveLoading } =
    useReportCropInactive();
  const handleInactive = async (id: string) => {
    try {
      await inactiveMutation(id || "");
      toast.success("Crop Report Unlisted Successfully!");
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };
  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="grid grid-cols-12 gap-3">
        {CropExisting?.reports?.map((crop, i) => (
          <div
            key={i}
            className="md:col-span-6 lg:col-span-4 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-main select-none"
          >
            <button
              // disabled={!isMember}
              className=" col-span-11 grid grid-cols-11 "
            >
              <Avatar className="col-span-4 h-full w-full border-r rounded object-center">
                <AvatarImage className="rounded" src={crop.image} />
                <AvatarFallback className="rounded text-xl">
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
                <AlertDialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" " asChild>
                      <Button variant="outline">Options</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Existing Crop Menu</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup>
                        <DropdownMenuItem
                          onClick={() => handleCropReport(crop)}
                        >
                          <BsClipboardPlus className="mr-2 h-4 w-4" />
                          <span>Add Report Here</span>
                        </DropdownMenuItem>

                        <AlertDialogTrigger className="w-full">
                          <DropdownMenuItem>
                            <BsClipboardMinus className="mr-2 h-4 w-4" />
                            <span>Unlist Existing Crop</span>
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently this
                        crop report in the list of existing planted crops.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleInactive(crop.crop_id || "")}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </button>
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
      <Loader isVisible={inactiveLoading} />
    </div>
  );
};

export default CropsReportExisting;
