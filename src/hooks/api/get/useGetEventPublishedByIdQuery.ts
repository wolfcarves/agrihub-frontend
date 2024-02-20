import { useQuery } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";

export default function useGetEventPublishedByIdQuery(id: string) {
  return useQuery({
    queryKey: ["GET_EVENT_PUBLISHED_BY_ID"],
    queryFn: async () => {
      const response = await EventsService.getApiEventsPublished({ id });

      return response;
    }
  });
}
