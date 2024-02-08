import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService, UpdateLearningMaterial } from "@api/openapi";
import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const usePutLearningUpdateDraftKey = () => "PUT_LEARNING_UPDATE_DRAFT_KEY";

type DataSchema = {
  id: string;
  requestBody: UpdateLearningMaterial;
};

export default function usePutLearningUpdateDraft() {
  const queryClient = useQueryClient();

  return useMutation([usePutLearningUpdateDraftKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await LearningMaterialsService.putApiLearningUpdateDraft(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_DRAFT_VIEW()] });
    }
  });
}
