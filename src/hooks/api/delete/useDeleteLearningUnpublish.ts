import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";
import { GET_LEARNING_DRAFT_LIST } from "../get/useGetLearningDraftList";

const useDeleteLearningUnpublishKey = () =>
  "DELETE_LEARNING_MATERIAL_UNPUBLISH_KEY";

export default function useDeleteLearningUnpublish() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteLearningUnpublishKey()], {
    async mutationFn(id: string) {
      const response =
        await LearningMaterialsService.deleteApiLearningUnpublish({
          id
        });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_LEARNING_DRAFT_LIST()]);
    }
  });
}
