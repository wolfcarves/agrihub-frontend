import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmService } from "@api/openapi";
import { GET_COMMUNITY_FARM_QUESTIONS } from "../get/useGetCommunityFarmQuestions";

const useDeleteCommunityFarmQuestionsKey = () =>
  "DELETE_COMMUNITY_FARM_QUESTIONS_KEY";

export default function useDeleteCommunityFarmQuestions() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteCommunityFarmQuestionsKey()], {
    async mutationFn(id: string) {
      const response =
        await CommunityFarmService.deleteApiCommunityFarmQuestions({
          id
        });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_QUESTIONS()]);
    }
  });
}
