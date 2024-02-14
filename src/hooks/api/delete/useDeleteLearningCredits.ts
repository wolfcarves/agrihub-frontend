import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";
import { GET_LEARNING_VIEW } from "../get/useGetLearningView";

const useDeleteLearningCreditsKey = () => "LEARNING_REMOVE_CREDITS_KEY";

export default function useDeleteLearningCredits() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteLearningCreditsKey()], {
    async mutationFn(id: string) {
      const response =
        await LearningMaterialsService.deleteApiLearningRemoveCredits({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_VIEW()] });
    }
  });
}
