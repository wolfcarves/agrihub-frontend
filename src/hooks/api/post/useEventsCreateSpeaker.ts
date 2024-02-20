import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EventsService, NewEventSpeaker } from "@api/openapi";
import { GET_LEARNING_VIEW } from "../get/useGetLearningView";
import { GET_EVENTS_DRAFT_VIEW } from "../get/useGetEventsDraftView";

const useEventsCreateSpeakerKey = () => "EVENTS_CREATE_SPEAKER_KEY";

type DataSchema = {
  id: string;
  formData: NewEventSpeaker;
};

export default function useEventsCreateSpeaker() {
  const queryClient = useQueryClient();

  return useMutation([useEventsCreateSpeakerKey()], {
    async mutationFn(data: DataSchema) {
      const response = await EventsService.postApiEventsCreateSpeaker(data);

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_EVENTS_DRAFT_VIEW()] });
    }
  });
}
