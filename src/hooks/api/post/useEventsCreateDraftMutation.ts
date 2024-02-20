import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService, LearningMaterialsService } from "@api/openapi";

const useEventsCreateDraftMutationKey = () =>
  "EVENTS_CREATE_DRAFT_MUTATION_KEY";

type MutationData = {
  title: string;
};

export default function useEventsCreateDraftMutation() {
  const queryClient = useQueryClient();

  return useMutation([useEventsCreateDraftMutationKey()], {
    async mutationFn(requestBody: MutationData) {
      const { title } = requestBody;
      const response = await EventsService.postApiEventsCreateDraft({
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
