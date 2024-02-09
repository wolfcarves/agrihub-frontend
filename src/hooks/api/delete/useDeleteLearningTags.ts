import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";
import { GET_LEARNING_DRAFT_VIEW } from "../get/useGetLearningDraftView";

const useDeleteLearningTagsKey = () => "LEARNING_REMOVE_TAGS_KEY";

export default function useDeleteLearningTags() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteLearningTagsKey()], {
    async mutationFn(id: string) {
      const response =
        await LearningMaterialsService.deleteApiLearningRemoveTags({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_LEARNING_DRAFT_VIEW()] });
    }
  });
}
