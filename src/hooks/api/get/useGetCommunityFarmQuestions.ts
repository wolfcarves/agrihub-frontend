import { useQuery } from "@tanstack/react-query";
import { CmsService, CommunityFarmService } from "@api/openapi";

export const GET_COMMUNITY_FARM_QUESTIONS = () =>
  "GET_COMMUNITY_FARM_QUESTIONS_KEY";

export default function useGetCommunityFarmQuestions(id: string) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_QUESTIONS(), id],
    queryFn: async () => {
      const data = await CommunityFarmService.getApiCommunityFarmQuestions({
        id
      });
      return data;
    }
  });
}
