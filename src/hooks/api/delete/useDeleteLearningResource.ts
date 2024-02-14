import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";
import { GET_LEARNING_VIEW } from "../get/useGetLearningView";

const useDeleteLearningResourceKey = () => "LEARNING_REMOVE_RESOURCE_KEY";

export default function useDeleteLearningResource() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteLearningResourceKey()], {
    async mutationFn(id: string) {
      const response =
        await LearningMaterialsService.deleteApiLearningRemoveResource({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_VIEW()] });
    }
  });
}
