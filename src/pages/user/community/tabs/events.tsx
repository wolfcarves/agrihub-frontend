import React, { useMemo } from "react";
import EventsHead from "../../../../components/user/community/events-community/events-head/events-head";
import useGetCommunityFarmEventList from "../../../../hooks/api/get/useGetCommunityFarmEventList";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
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
} from "../../../../components/ui/alert-dialog";
import useDeleteCommunityFarmEventsEngagement from "../../../../hooks/api/delete/useDeleteCommunityFarmEventsEngagement";

const CommunityEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const {
    mutateAsync: deleteEngagementMutate,
    isLoading: deleteEngagementLoading
  } = useDeleteCommunityFarmEventsEngagement();

  const { mutateAsync: actionMutate, isLoading: actionLoading } =
    useCommunityFarmEventsAction();

  const handleGoing = async (id: string, type: string, actionId: string) => {
    try {
      if (type === "going") {
        deleteEngagementMutate(actionId);
      } else {
        await actionMutate({
          id: id,
          requestBody: {
            action: EventAction.action.GOING
          }
        });
        toast.success("Marked As Going!");
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleInterest = async (id: string, type: string, actionId: string) => {
    try {
      if (type === "interested") {
        deleteEngagementMutate(actionId);
      } else {
        await actionMutate({
          id: id,
          requestBody: {
            action: EventAction.action.INTERESTED
          }
        });
        toast.success("Marked As Interested!");
      }
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

  // const convertLocalToUTC = (localDateString: string) => {
  //   const localDate = new Date(localDateString);
  //   const timezoneOffsetMinutes = localDate.getTimezoneOffset();
  //   const utcDate = new Date(
  //     localDate.getTime() - timezoneOffsetMinutes * 60 * 1000
  //   );
  //   return utcDate.toISOString();
  // };

  const handleView = (farm: string, event: string) => {
    navigate(`/community/my-community/${farm}/event/${event}`);
  };

  return (
    <div className=" px-4 py-5">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <h3 className=" font-poppins-medium">Events</h3>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between  flex-col lg:flex-row gap-3 mb-4">
        <Input
          placeholder="Search event..."
          className="max-w-sm"
          onChange={e => debouncedSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-3">
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
          {isMember && (
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
          )}

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
                className="md:h-[15rem] h-[12rem] w-full rounded-2xl object-cover object-center border-[4px] border-primary"
              />
            </div>
            <div className=" col-span-6 pl-3">
              <div className=" flex gap-2 capitalize items-center md:text-sm text-xs font-poppins-regular mt-2">
                <TfiWorld size={17} className="text-primary" /> {task.type}
              </div>

              <div
                onClick={() => handleView(task.farmid || "", task.id || "")}
                className=" cursor-pointer"
              >
                <h6 className=" md:mt-10 mt-2 md:text-lg text-base font-poppins-medium hover:underline hover:underline-offset-3">
                  {task.title}
                </h6>
                <div>
                  <div>
                    <span className="w-auto md:text-xs text-[.4rem] bg-primary text-white rounded-2xl p-1 px-3">
                      <span>
                        {format(
                          new Date(task.start_date?.slice(0, -5) || ""),
                          "MMMM do yyyy, h:mm a"
                        )}
                      </span>{" "}
                      -{" "}
                      <span>
                        {format(
                          new Date(task.end_date?.slice(0, -5) || ""),
                          "MMMM do yyyy, h:mm a"
                        )}
                        {/* {"   s"}
                      {task.end_date?.slice(0, -4)} TTTT */}
                      </span>
                    </span>
                  </div>
                  <div className=" md:line-clamp-3 line-clamp-2 md:text-sm text-xs font-poppins-regular">
                    {parse(task.about || "")}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  className={`border md:text-sm text-[.6rem] md:p-4 p-2 md:h-10 h-8  border-slate-200 bg-white text-slate-900 hover:bg-slate-100 gap-1 ${
                    task.action?.type === "going" &&
                    "bg-primary text-white hover:bg-primary/70"
                  }`}
                  onClick={() =>
                    handleGoing(
                      task.id || "",
                      task.action?.type || "",
                      task.action?.id || ""
                    )
                  }
                >
                  Going <MdOutlineLocationOn className="md:text-base text-xs" />
                </Button>
                <Button
                  className={`bg-slate-100 md:text-sm text-[.6rem] md:p-4 p-2 md:h-10 h-8 text-slate-900 hover:bg-slate-100/80 gap-1 ${
                    task.action?.type === "interested" &&
                    "bg-primary text-white hover:bg-primary/70"
                  }`}
                  onClick={() =>
                    handleInterest(
                      task.id || "",
                      task.action?.type || "",
                      task.action?.id || ""
                    )
                  }
                >
                  Interested <PiBookBookmark className="md:text-base text-xs" />
                </Button>
              </div>
              <div className="mt-2 flex gap-2 justify-end md:text-sm text-xs">
                <span className="flex items-center text-gray-500 font-poppins-regular">
                  <MdOutlineLocationOn size={15} />
                  Going: {task.going}
                </span>
                <span className="flex items-center text-gray-500 font-poppins-regular">
                  <PiBookBookmark size={15} />
                  Interested: {task.interested}
                </span>
              </div>
            </div>
            {isMember && isAllowed && (
              <div className="absolute right-0 flex items-center gap-2 pt-2 pr-2">
                <UpdateEventsModal eventId={task.id || ""} />

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className=" bg-destructive  md:text-sm text-[.5rem] md:p-4 p-2 md:h-10 h-8">
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Do you want to delete this event?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this event and remove the data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(task.id || "")}
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
