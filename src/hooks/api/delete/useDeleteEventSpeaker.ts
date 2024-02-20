import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService } from "@api/openapi";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const useDeleteEventSpeakerKey = () => "EVEN_REMOVE_SPEAKER_KEY";

export default function useDeleteEventSpeaker() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteEventSpeakerKey()], {
    async mutationFn(id: string) {
      const response = await EventsService.deleteApiEventsRemoveSpeaker({ id });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
