import { useQuery } from "@tanstack/react-query";
import { CommunityFarmEventsService } from "@api/openapi";

type EventsParams = {
    search?: string;
    page?: string;
    perpage?: string;
    type?:'private' | 'public'
    filter?: 'upcoming' | 'previous';
};
export const GET_COMMUNITY_FARM_EVENT_LIST = () => "GET_COMMUNITY_FARM_EVENT_LIST_KEY";
export default function useGetEventCommunity(data: EventsParams) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_EVENT_LIST(), ...[data]],
    queryFn: async () => {
      const response = await CommunityFarmEventsService.getApiCommunityFarmEventList1({
        ...data
      });

      return response;
    }
  });
}
