import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_DRAFT_LIST } from "../get/useGetEventsDraftList";

const useDeleteEventDraftKey = () => "DELETE_EVENT_DRAFT_KEY";

export default function useDeleteEventDraft() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteEventDraftKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.deleteApiEventsDeleteDraft({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_EVENTS_DRAFT_LIST()]);
    }
  });
}
