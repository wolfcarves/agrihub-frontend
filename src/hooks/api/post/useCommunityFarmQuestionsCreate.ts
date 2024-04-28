import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CommunityFarmService, FarmQuestion } from "@api/openapi";
import { GET_COMMUNITY_FARM_QUESTIONS } from "../get/useGetCommunityFarmQuestions";

const useCommunityFarmQuestionsCreateKey = () =>
  "USE_COMMUNITY_FARM_QUESTIONS_CREATE_KEY";
type DataSchema = {
  requestBody: FarmQuestion;
};
export default function useCommunityFarmQuestionsCreate() {
  const queryClient = useQueryClient();

  return useMutation([useCommunityFarmQuestionsCreateKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await CommunityFarmService.postApiCommunityFarmQuestions(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_COMMUNITY_FARM_QUESTIONS()]);
    }
  });
}
