import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";

import { GET_LEARNING_VIEW } from "../get/useGetLearningView";

const useDeleteLearningDraftDeleteKey = () =>
  "DELETE_LEARNING_MATERIAL_DRAFT_DELETE_KEY";

export default function useDeleteLearningDraftDelete() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteLearningDraftDeleteKey()], {
    async mutationFn(id: string) {
      const response =
        await LearningMaterialsService.deleteApiLearningDraftDelete({
          id
        });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_LEARNING_VIEW()]);
    }
  });
}
