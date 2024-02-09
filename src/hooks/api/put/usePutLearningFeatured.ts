import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService, UpdateLearningMaterial } from "@api/openapi";
import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const usePutLearningFeaturedKey = () => "PUT_LEARNING_FEATURED_KEY";

type DataSchema = {
  materialId: string;
  id: string;
};

export default function usePutLearningFeatured() {
  const queryClient = useQueryClient();

  return useMutation([usePutLearningFeaturedKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await LearningMaterialsService.putApiLearningFeatured(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_DRAFT_VIEW()] });
    }
  });
}
