import { useQuery } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";

type EventsParams = {
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "upcoming" | "previous";
};

export default function useGetEventPublishedListQuery(data: EventsParams) {
  return useQuery({
    queryKey: ["GET_EVENTS_PUBLISHED_LIST"],
    queryFn: async () => {
      const response = await EventsService.getApiEventsPublishedList({
        ...data
      });

      return response.data;
    }
  });
}
