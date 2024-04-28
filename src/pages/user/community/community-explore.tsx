import React, { useMemo } from "react";
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
import { Link } from "react-router-dom";
import RegisterFarm from "./buttons/RegisterFarm";
import useGetFarmCheckExistingApplication from "../../../hooks/api/get/useGetFarmCheckExistingApplication";
import { Button } from "../../../components/ui/button";
import SearchNotFoundIllustration from "@icons/community/SearchNotFoundIllustration";
import LoadingSpinner from "@icons/LoadingSpinner";
import { formatDistrict } from "../../../components/lib/utils";
import { User } from "lucide-react";

type SortValues =
  | "All"
  | "District 1"
  | "District 2"
  | "District 3"
  | "District 4"
  | "District 5"
  | "District 6"
  | undefined;

const Explore = () => {
  const { data: UserData, isFetching } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isError } = useGetFarmCheckExistingApplication();

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
    filter: params.sortBy
      ? params.sortBy === "All"
        ? undefined
        : params.sortBy
      : (formatDistrict(UserData?.district || "") as
          | "District 1"
          | "District 2"
          | "District 3"
          | "District 4"
          | "District 5"
          | "District 6"
          | undefined),
    perpage: "9"
  });

  console.log(data);

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
        {UserData?.role !== "subfarm_head" &&
          UserData?.role !== "farm_head" &&
          UserData?.role !== "farmer" &&
          UserData?.role !== "asst_admin" &&
          UserData?.role !== "admin" && (
            <div className="flex w-full justify-between">
              <p className=" text-sm max-w-xl">
                If your farm is affiliated with QCU - Center for Urban
                Agriculture and Innovation and can not find your community here,
                you can click register farm button to register your farm
              </p>
              {!isError ? (
                <Link to="/community/register">
                  <Button>Pending Applicaton</Button>
                </Link>
              ) : (
                <RegisterFarm />
              )}
            </div>
          )}
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
              <SelectItem value="All">All</SelectItem>
              {district.map((id, i) => (
                <SelectItem key={i} value={id}>
                  {id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="min-h-[16.5rem]">
          {isLoading && isFetching && (
            <div className="flex justify-center items-center h-96">
              <LoadingSpinner />
            </div>
          )}

          {!isLoading && !isFetching && (
            <div className="grid grid-cols-6 gap-2 mt-4 mb-3">
              {data?.farms && data.farms.length > 0 ? (
                data.farms
                  .filter(farm => farm.id !== UserData?.farm_id)
                  .map((farm, i) => <FarmCard farm={farm} key={i} />)
              ) : (
                <div className="col-1 col-span-6 mx-auto my-10 sm:mt-16">
                  <SearchNotFoundIllustration />{" "}
                </div>
              )}
            </div>
          )}
        </div>
        <Pagination totalPages={totalPages} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Explore;
