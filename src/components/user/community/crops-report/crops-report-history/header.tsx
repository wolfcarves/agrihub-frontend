import React, { Dispatch, SetStateAction } from "react";
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
interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  filter: string[];
  setFilter: Dispatch<SetStateAction<string[]>>;
}
const Header: React.FC<HeaderProps> = ({
  search,
  setSearch,
  filter,
  setFilter
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
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
  return (
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
          <IoMdAdd size={15} /> Report
        </Button>
      </div>
    </div>
  );
};

export default Header;
