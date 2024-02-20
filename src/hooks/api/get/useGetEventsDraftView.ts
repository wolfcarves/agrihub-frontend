import { useQuery } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";

export const GET_EVENTS_DRAFT_VIEW = () => "GET_EVENTS_DRAFT_VIEW_KEY";

export default function useGetEventsDraftView(id: string) {
  return useQuery({
    queryKey: [GET_EVENTS_DRAFT_VIEW(), id],
    queryFn: async () => {
      const data = await EventsService.getApiEventsView({ id });
      return data;
    }
  });
}
