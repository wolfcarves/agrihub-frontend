import { useQuery } from "@tanstack/react-query";
import { CommunityFarmEventsService } from "@api/openapi";

export const GET_COMMUNITY_FARM_EVENT_VIEW = () =>
  "GET_COMMUNITY_FARM_EVENT_VIEW_KEY";

export default function useGetCommunityFarmEventView(id: string) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_EVENT_VIEW(), id],
    queryFn: async () => {
      const response =
        await CommunityFarmEventsService.getApiCommunityFarmEventView({ id });
      return response;
    }
  });
}
