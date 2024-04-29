import { useQuery } from "@tanstack/react-query";
import { CommunityFarmService } from "@api/openapi";

export const GET_COMMUNITY_FARM_CHECK_EXISTING_APPLICATION_KEY = () =>
  "GET_COMMUNITY_FARM_EXISTING_APPLICATION_KEY";

export default function useGetCommunityFarmCheckExisting() {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_CHECK_EXISTING_APPLICATION_KEY()],
    queryFn: async () => {
      const response =
        await CommunityFarmService.getApiCommunityFarmMemberApplicationExisting();

      return response;
    }
  });
}
