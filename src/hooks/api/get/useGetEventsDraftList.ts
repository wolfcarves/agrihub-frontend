import { useQuery } from "@tanstack/react-query";
import { EventsService } from "../../../api/openapi";

export const GET_EVENTS_DRAFT_LIST = () => "GET_EVENTS_DRAFT_LIST_KEY";

export default function useGetEventsDraftList(
  search?: string,
  page?: string,
  perpage?: string
) {
  return useQuery({
    queryKey: [GET_EVENTS_DRAFT_LIST(), page, search],
    queryFn: async () => {
      const data = await EventsService.getApiEventsDraft({
        search,
        page,
        perpage
      });
      return data;
    },
    keepPreviousData: true
  });
}
