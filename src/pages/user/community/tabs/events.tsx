import React, { useMemo } from "react";
import EventsHead from "../../../../components/user/community/events-community/events-head/events-head";
import useGetCommunityFarmEventList from "../../../../hooks/api/get/useGetCommunityFarmEventList";
import { useParams, useSearchParams } from "react-router-dom";
import { Pagination } from "../../../../components/ui/custom";
import useDebounce from "../../../../hooks/utils/useDebounce";
import Input from "../../../../components/ui/custom/input/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../components/ui/select";
import useAuth from "../../../../hooks/useAuth";
import { Button } from "../../../../components/ui/button";
import { IoMdAddCircle } from "react-icons/io";
import CreateEventsModal from "../../../../components/user/community/events-community/events-modal/create-events-modal";

const CommunityEvents = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: useData } = useAuth();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,

      search: searchParams.get("search") ?? undefined,
      filter: searchParams.get("filter") as "upcoming" | "previous",
      type: searchParams.get("type") as "private" | "public"
    };
  }, [searchParams]);

  const { data: taskData, isLoading } = useGetCommunityFarmEventList({
    id: id || "",
    search: params.search,
    page: String(params.currentPage),
    perpage: "10",
    type: params.type,
    filter: params.filter
  });

  console.log(taskData);
  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  }, 100);
  return (
    <div className=" px-4 py-5">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <h3 className=" font-poppins-medium">Events</h3>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between gap-3 mb-4">
        <Input
          placeholder="Search event..."
          className="max-w-sm"
          onChange={e => debouncedSearch(e.target.value)}
        />
        <div className="flex gap-3">
          <Select
            onValueChange={val => {
              searchParams.set("filter", val);
              setSearchParams(searchParams);
            }}
          >
            <SelectTrigger className="w-[120px] focus-visible:ring-0 focus:ring-0">
              <SelectValue placeholder="Filter..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="previous">Previous</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={val => {
              searchParams.set("type", val);
              setSearchParams(searchParams);
            }}
          >
            <SelectTrigger className="w-[120px] focus-visible:ring-0 focus:ring-0">
              <SelectValue placeholder="Type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {useData?.role === "farm_head" && <CreateEventsModal />}
        </div>
      </div>
      <div></div>
      {taskData?.pagination?.total_pages !== 1 && (
        <Pagination
          totalPages={Number(taskData?.pagination?.total_pages)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default CommunityEvents;
