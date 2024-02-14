import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LearningMaterialsService } from "@api/openapi";

const useLearningCreateDraftMutationKey = () =>
  "LEARNING_CREATE_DRAFT_MUTATION_KEY";

type MutationData = {
  title: string;
};

export default function useLearningCreateDraftMutation() {
  const queryClient = useQueryClient();

  return useMutation([useLearningCreateDraftMutationKey()], {
    async mutationFn(requestBody: MutationData) {
      const { title } = requestBody;
      const response =
        await LearningMaterialsService.postApiLearningCreateDraft({
          requestBody: {
            title
          }
        });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [] });
    }
  });
}
