import { useQuery } from "@tanstack/react-query";
import { EventsService } from "../../../api/openapi";

export const GET_EVENTS_ARCHIVE_LIST = () => "GET_EVENTS_ARCHIVE_LIST_KEY";

export default function useGetEventArchiveList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_EVENTS_ARCHIVE_LIST()],
    queryFn: async () => {
      const data = await EventsService.getApiEventsArchivedList({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
