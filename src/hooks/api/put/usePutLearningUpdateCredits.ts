import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService, NewLearningCredits } from "@api/openapi";
import { GET_LEARNING_VIEW } from "../get/useGetLearningView";

const usePutLearningUpdateCreditsKey = () => "PUT_LEARNING_CREDITS_UPDATE_KEY";

type DataSchema = {
  requestBody: NewLearningCredits;
  id: string;
};

export default function usePutLearningUpdateCredits() {
  const queryClient = useQueryClient();

  return useMutation([usePutLearningUpdateCreditsKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await LearningMaterialsService.putApiLearningUpdateCredits(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_VIEW()] });
    }
  });
}
