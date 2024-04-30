import { useQuery } from "@tanstack/react-query";
import { CommunityFarmEventsService } from "@api/openapi";

export const GET_COMMUNITY_FARM_EVENT_LIST = () =>
  "GET_COMMUNITY_FARM_EVENT_LIST_KEY";
type hookParams = {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  type?: "private" | "public";
  filter?: "upcoming" | "previous";
};
export default function useGetCommunityFarmEventList(data: hookParams) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_EVENT_LIST(), ...[data]],
    queryFn: async () => {
      const response =
        await CommunityFarmEventsService.getApiCommunityFarmEventList(data);
      return response;
    }
  });
}
