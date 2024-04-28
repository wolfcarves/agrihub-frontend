import { useQuery } from "@tanstack/react-query";
import { CmsService, CommunityFarmService } from "@api/openapi";

export const GET_COMMUNITY_FARM_APPLICATION_LIST = () =>
  "GET_COMMUNITY_FARM_APPLICATION_LIST_KEY";
type hookParams = {
  id: string;
  search?: string;
  page?: string;
  perpage?: string;
  filter?: "pending" | "accepted" | "rejected";
};
export default function useGetCommunityFarmApplicationList(data: hookParams) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_APPLICATION_LIST(), ...[data]],
    queryFn: async () => {
      const response =
        await CommunityFarmService.getApiCommunityFarmMemberApplications(data);
      return response;
    }
  });
}
