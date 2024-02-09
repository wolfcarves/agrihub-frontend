import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService, NewLearningTags } from "@api/openapi";
import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const useLearningCreateTagsKey = () => "LEARNING_CREATE_TAGS_KEY";

type DataSchema = {
  id: string;
  requestBody: NewLearningTags;
};

export default function useLearningCreateTags() {
  const queryClient = useQueryClient();

  return useMutation([useLearningCreateTagsKey()], {
    async mutationFn(data: DataSchema) {
      const response =
        await LearningMaterialsService.postApiLearningCreateTags(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_DRAFT_VIEW()] });
    }
  });
}
