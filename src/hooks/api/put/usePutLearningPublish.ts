import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";

import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const usePutLearningPublishKey = () => "PUT_LEARNING_MATERIAL_PUBLISH_KEY";

export default function usePutLearningPublish() {
  const queryClient = useQueryClient();

  return useMutation([usePutLearningPublishKey()], {
    async mutationFn(id: string) {
      const response = await LearningMaterialsService.putApiLearningPublish({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_LEARNING_DRAFT_VIEW()]);
    }
  });
}
