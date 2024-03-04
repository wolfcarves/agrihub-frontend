import { useQuery } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";

type EventsParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "upcoming" | "previous";
};
export const GET_EVENTS_PUBLISHED_LIST = () => "GET_EVENTS_PUBLISHED_LIST_KEY";
export default function useGetEventPublishedListQuery(data: EventsParams) {
  return useQuery({
    queryKey: [GET_EVENTS_PUBLISHED_LIST(), ...[data]],
    queryFn: async () => {
      const response = await EventsService.getApiEventsPublishedList({
        ...data
      });

      return response;
    }
  });
}
