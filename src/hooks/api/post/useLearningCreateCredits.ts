import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService, NewLearningCredits } from "@api/openapi";
import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const useLearningCreateCreditsKey = () => "LEARNING_CREATE_CREDIT_KEY";

type DataSchema = {
  id: string;
  requestBody: NewLearningCredits;
};

export default function useLearningCreateCredits() {
  const queryClient = useQueryClient();

  return useMutation([useLearningCreateCreditsKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await LearningMaterialsService.postApiLearningCreateCredits(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_DRAFT_VIEW()] });
    }
  });
}
