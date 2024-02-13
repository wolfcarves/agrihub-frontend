import React, { useMemo, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import useGetFarmListQuery from "../../../hooks/api/get/useGetFarmListQuery";
import FarmCard from "../../../components/user/community/farm-card/farm-card";
import { district } from "../../../constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../components/ui/custom";

type SortValues =
  | "District 1"
  | "District 2"
  | "District 3"
  | "District 4"
  | "District 5"
  | "District 6"
  | undefined;

const Explore = () => {
  const { data: UserData } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as SortValues,
      search: searchParams.get("search")
    };
  }, [searchParams]);

  const { data, isLoading } = useGetFarmListQuery({
    search: params.search ?? "",
    page: String(params.currentPage) ?? "1",
    filter: params.sortBy ?? undefined,
    perpage: "6"
  });

  const totalPages = data?.pagination?.total_pages ?? params.currentPage + 1;

  const handleFilterChange = (value: string) => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  };

  const handleSearch = (value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full">
      <div className="p-4">
        <h1 className="font-bold text-4xl">Discover Communities</h1>
        <div></div>
      </div>
      <div className="px-4 py-4 flex border-y gap-3 border-border">
        <IoMdSearch size={22} />
        <input
          type="text"
          onChange={e => handleSearch(e.target.value)}
          className=" bg-transparent focus:outline-none focus:ring-0"
          placeholder="Search for community"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-md font-bold">Farm Community Lists</h3>
            <p className="text-sm text-gray-400">
              Search for a farm community where you belong to
            </p>
          </div>
          <Select onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter District..." />
            </SelectTrigger>
            <SelectContent>
              {district.map((id, i) => (
                <SelectItem key={i} value={id}>
                  {id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="min-h-[16.5rem]">
          <div className="grid grid-cols-6 gap-2 mt-4 mb-3">
            {data?.farms
              ?.filter(farm => farm.id !== UserData?.farm_id)
              .map((farm, i) => <FarmCard farm={farm} key={i} />)}
          </div>
        </div>
        <Pagination totalPages={totalPages} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Explore;
