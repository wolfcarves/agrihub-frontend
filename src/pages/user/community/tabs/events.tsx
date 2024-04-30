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
import { TfiWorld } from "react-icons/tfi";
import { format } from "date-fns";
import parse from "html-react-parser";
import useCommunityFarmEventsAction from "../../../../hooks/api/post/useCommunityFarmEventsAction";
import { toast } from "sonner";
import Loader from "../../../../icons/Loader";
import { EventAction } from "../../../../api/openapi";
import useDeleteCommunityFarmEvents from "../../../../hooks/api/delete/useDeleteCommunityFarmEvents";
import UpdateEventsModal from "../../../../components/user/community/events-community/events-modal/update-events-modal";
import useCommunityAutorization from "../../../../hooks/utils/useCommunityAutorization";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiBookBookmark } from "react-icons/pi";

const CommunityEvents = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isMember, isAllowed } = useCommunityAutorization();
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
  const { mutateAsync: actionMutate, isLoading: actionLoading } =
    useCommunityFarmEventsAction();

  const handleGoing = async (id: string) => {
    try {
      await actionMutate({
        id: id,
        requestBody: {
          action: EventAction.action.GOING
        }
      });
      toast.success("Marked As Going!");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleInterest = async (id: string) => {
    try {
      await actionMutate({
        id: id,
        requestBody: {
          action: EventAction.action.INTERESTED
        }
      });
      toast.success("Marked As Interested!");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const { mutateAsync: deleteMutate, isLoading: deleteLoading } =
    useDeleteCommunityFarmEvents();

  const handleDelete = async (id: string) => {
    try {
      await deleteMutate(id);
      toast.success("Event Deleted Successfully!");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

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
      <div className="flex justify-between flex-col lg:flex-row gap-3 mb-4">
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
            defaultValue={"upcoming"}
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
          {isAllowed && isMember && <CreateEventsModal />}
        </div>
      </div>

      {taskData?.data?.length === 0 && (
        <div className="text-center">
          <p className="text-gray-400">No event found for this farm.</p>
        </div>
      )}
      <div className="grid grid-cols-12 gap-2 w-full">
        {taskData?.data?.map((task, i) => (
          <div
            key={i}
            className="lg:col-span-12 col-span-12 grid grid-cols-10 bg-white shadow-md border border-border p-3 rounded-2xl relative"
          >
            <div className=" col-span-4">
              <img
                src={task.banner}
                className=" h-[15rem] w-full rounded-2xl object-cover object-center border-[4px] border-primary"
              />
            </div>
            <div className=" col-span-6 pl-3">
              <div className=" flex gap-2 capitalize items-center font-poppins-regular mt-2">
                <TfiWorld size={17} className="text-primary" /> {task.type}
              </div>

              <h6 className=" mt-10 text-lg font-poppins-medium">
                {task.title}
              </h6>
              <div>
                <div>
                  <span className="w-auto text-xs bg-primary text-white rounded-2xl p-1 px-3">
                    <span>
                      {format(
                        new Date(task.start_date || ""),
                        "MMMM do yyyy, h:mm a"
                      )}
                    </span>{" "}
                    -{" "}
                    <span>
                      {format(
                        new Date(task.end_date || ""),
                        "MMMM do yyyy, h:mm a"
                      )}
                    </span>
                  </span>
                </div>
                <div className=" line-clamp-3 font-poppins-regular">
                  {parse(task.about || "")}
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  className={`border border-slate-200 bg-white text-slate-900 hover:bg-slate-100 gap-1 ${
                    task.action?.type === "going" &&
                    "bg-primary text-white hover:bg-primary/70"
                  }`}
                  onClick={() => handleGoing(task.id || "")}
                >
                  Going <MdOutlineLocationOn size={14} />
                </Button>
                <Button
                  className={`bg-slate-100 text-slate-900 hover:bg-slate-100/80 gap-1 ${
                    task.action?.type === "interested" &&
                    "bg-primary text-white hover:bg-primary/70"
                  }`}
                  onClick={() => handleInterest(task.id || "")}
                >
                  Interested <PiBookBookmark size={15} />
                </Button>
              </div>
            </div>
            {isMember && isAllowed && (
              <div className="absolute right-0 flex items-center gap-2 pt-2 pr-2">
                <UpdateEventsModal eventId={task.id || ""} />
                <Button
                  className=" bg-destructive"
                  onClick={() => handleDelete(task.id || "")}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      {taskData?.pagination?.total_pages !== 1 && (
        <Pagination
          totalPages={Number(taskData?.pagination?.total_pages)}
          isLoading={isLoading}
        />
      )}
      <Loader isVisible={deleteLoading} />
    </div>
  );
};

export default CommunityEvents;
