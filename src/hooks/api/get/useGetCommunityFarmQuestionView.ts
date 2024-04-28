import { useQuery } from "@tanstack/react-query";
import { CmsService, CommunityFarmService } from "@api/openapi";

export const GET_COMMUNITY_FARM_QUESTIONS_VIEW = () =>
  "GET_COMMUNITY_FARM_QUESTIONS_VIEW_KEY";

export default function useGetCommunityFarmQuestionView(id: string) {
  return useQuery({
    queryKey: [GET_COMMUNITY_FARM_QUESTIONS_VIEW(), id],
    queryFn: async () => {
      const data = await CommunityFarmService.getApiCommunityFarmQuestions({
        id
      });
      return data;
    }
  });
}
