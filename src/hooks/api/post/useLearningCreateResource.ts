import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService, NewLearningResource } from "@api/openapi";
import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const useLearningCreateResourcetKey = () => "LEARNING_CREATE_RESOURCE_KEY";

type DataSchema = {
  id: string;
  formData: NewLearningResource;
};

export default function useLearningCreateResource() {
  const queryClient = useQueryClient();

  return useMutation([useLearningCreateResourcetKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await LearningMaterialsService.postApiLearningCreateResource(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_DRAFT_VIEW()] });
    }
  });
}
