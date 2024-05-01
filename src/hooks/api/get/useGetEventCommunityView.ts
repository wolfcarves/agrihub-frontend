import { useQuery } from "@tanstack/react-query";
import { CommunityFarmEventsService } from "@api/openapi";

export default function useGetEventCommunityView(id: string) {
  return useQuery({
    queryKey: ["GET_COMMUNITY_EVENT_VIEW"],
    queryFn: async () => {
      const response = await CommunityFarmEventsService.getApiCommunityFarmEventView({ id });

      return response;
    }
  });
}
