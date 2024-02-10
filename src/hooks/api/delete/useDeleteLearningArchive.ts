import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";

import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const useDeleteLearningArchiveKey = () =>
  "DELETE_LEARNING_MATERIAL_ARCHIVE_KEY";

export default function useDeleteLearningArchive() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteLearningArchiveKey()], {
    async mutationFn(id: string) {
      const response = await LearningMaterialsService.deleteApiLearningArchive({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_LEARNING_DRAFT_VIEW()]);
    }
  });
}
