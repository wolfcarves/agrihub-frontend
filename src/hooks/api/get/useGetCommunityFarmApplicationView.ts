import { useQuery } from "@tanstack/react-query";
import { CommunityFarmService } from "@api/openapi";

export const GET_COMMUNITY_FARM_APPLICATION_VIEW = () =>
  "GET_COMMUNITY_FARM__APPLICATION_VIEW_KEY";

export default function useGetCommunityFarmApplicationView(id: string) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_APPLICATION_VIEW(), id],
    queryFn: async () => {
      const data =
        await CommunityFarmService.getApiCommunityFarmMemberApplicationView({
          id
        });
      return data;
    }
  });
}
