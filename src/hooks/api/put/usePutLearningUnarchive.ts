import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";
import { GET_LEARNING_PUBLISHED_LIST } from "../get/useGetLearningPublishedList";

const usePutLearningUnarchiveKey = () => "PUT_LEARNING_MATERIAL_UNARCHIVE_KEY";

export default function usePutLearningUnarchive() {
  const queryClient = useQueryClient();

  return useMutation([usePutLearningUnarchiveKey()], {
    async mutationFn(id: string) {
      const response = await LearningMaterialsService.putApiLearningUnarchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_LEARNING_PUBLISHED_LIST()]);
    }
  });
}
